"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const rp = require("request-promise");
const crypto = require("crypto");
class FuncClass {
    base64Decode(str) {
        return new Buffer(str, 'base64').toString();
    }
    getTimeStamp() {
        return Math.floor(Date.now() / 1000);
    }
    gameCenterIdentityVerifier(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = JSON.parse(exports.Func.base64Decode(accessToken));
            let publicKeyUrl = data['publicKeyUrl'];
            let pem = yield exports.Func.getGameCenterPem(publicKeyUrl);
            return new Promise(function (resolve, reject) {
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
                verifier.update(data.salt, 'base64');
                let isValid = verifier.verify(pem, data.signature, 'base64');
                if (!isValid) {
                    reject("game center invalid signature");
                }
                resolve(data);
            });
        });
    }
    getGameCenterPem(publicKeyURL) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                request({ url: publicKeyURL, encoding: null }, function (error, response, body) {
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
                    }
                    else {
                        reject("game center get pem err:");
                    }
                });
            });
        });
    }
    getGooleUserInfo(idToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
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
                    resolve(data);
                })
                    .catch(function (err) {
                    reject("google: " + err.response.body.error_description);
                });
            });
        });
    }
    getFaceBookUserInfo(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
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
                    resolve(data);
                })
                    .catch(function (err) {
                    reject("facebook: " + err.response.body.error.message);
                });
            });
        });
    }
}
exports.Func = new FuncClass();
//# sourceMappingURL=Func.js.map