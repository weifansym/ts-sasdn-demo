import * as request from 'request';
import * as rp from 'request-promise';
import * as crypto from 'crypto';

class FuncClass {

  base64Decode(str: string) {
    return new Buffer(str, 'base64').toString();
  }

  getTimeStamp() {
    return Math.floor(Date.now() / 1000);
  }

  async gameCenterIdentityVerifier(accessToken: any): Promise<any> {
    let data = JSON.parse(Func.base64Decode(accessToken));
    let publicKeyUrl = data['publicKeyUrl'];
    let pem = await Func.getGameCenterPem(publicKeyUrl);
    return new Promise(function(resolve, reject) {
      // create timestamp big buffer
      let buffer = new Buffer(8);
      buffer.fill(0);
      let high = ~~(data.timestamp / 0xffffffff);
      let low = data.timestamp % (0xffffffff + 0x1);
      buffer.writeUInt32BE(high, 0);
      buffer.writeUInt32BE(low, 4);
      // verifier
      let verifier = crypto.createVerify('sha256');
      verifier.update(data.playerID, 'utf8');
      verifier.update(data.bundleID, 'utf8');
      verifier.update(buffer);
      verifier.update(data.salt, 'base64' as any);
      let isValid = verifier.verify(pem, data.signature, 'base64');
      if (!isValid) {
        reject("game center invalid signature");
      }
      resolve(data);
    });
  }

  async getGameCenterPem(publicKeyURL: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      request({url: publicKeyURL, encoding: null}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          let pmd = '-----BEGIN CERTIFICATE-----';
          let base64 = body.toString('base64');
          let size = base64.length;
          for (let i = 0; i < size; i = i + 64) {
            let end = i + 64 < size ? i + 64 : size;
            pmd = pmd + '\n' + base64.substring(i, end);
          }
          pmd = pmd + '\n-----END CERTIFICATE-----';
          resolve(pmd);
        } else {
          reject("game center get pem err:");
        }
      });
    })
  }

  async getGooleUserInfo(idToken: string): Promise<any> {
    return new Promise(function(resolve, reject) {
      let options = {
        uri: 'https://www.googleapis.com/oauth2/v3/tokeninfo',
        qs: {
          id_token: idToken
        },
        headers: {
          'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
      };

      rp(options)
        .then(function (data) {
          resolve(data)
        })
        .catch(function (err) {
          reject("google: "+err.response.body.error_description);
        });
    });
  }

  async getFaceBookUserInfo(accessToken: string) : Promise<any> {
    return new Promise(function(resolve, reject) {
      let options = {
        uri: 'https://graph.facebook.com/v2.10/me?fields=id,name,email',
        qs: {
          access_token: accessToken
        },
        headers: {
          'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
      };

      rp(options)
        .then(function (data) {
          resolve(data)
        })
        .catch(function (err) {
          reject("facebook: " + err.response.body.error.message);
        });
    });
  }
}

export const Func = new FuncClass();
