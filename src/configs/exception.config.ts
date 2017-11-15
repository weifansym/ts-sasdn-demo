export const ModuleName = 'APIGateway';
export const ErrorCode = {
    /** 10001 - 10050 System Common Error**/
    10001: '[%m] Error: %s.',
    10010: '[%m] Invalid config path, path:%.',
    10011: '[%m] ConfigHelper Instance has not initialized.',
    10012: '[%m] TracerHelper Instance has not initialized.',
    10021: '[%m] ModuleOption does not exist!, module:%s.',
    10022: '[%m] ModuleOption\'s version dose not exist!, module:%s, version:%s.',
    10031: '[%m] Database type not found，type:%s.',
    10032: '[%m] Database config not found，shardId:%s.',

    /** 10051 - 10100 Gateway Logic Error**/
    10051: '[%m] Api sign err! %s',
    10052: '[%m] AccessToken expired! %s',
    10053: '[%m] Params user id err! userId: %s',
    10054: '[%m] AccountType err!',
    10055: '[%m] The third party check token err! (%s)',
    10056: '[%m] Not found account id!',
    10057: '[%m] Params key extra = base64(jsonString), err: %s',
    10058: '[%m] Params account type err'
};
