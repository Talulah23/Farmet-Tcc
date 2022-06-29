export default {
  "expo": {
    "name": "farmet",
    "slug": "farmet",
    "version": "1.0.0",
    "assetBundlePatterns": [
      "**/*"
    ],
    "extra": {
      "debug": process.env.DEBUG === 'false',
      "emulator_host": process.env.EMULATOR_HOST,
      "emulator_firestore_port": process.env.EMULATOR_FIRESTORE_PORT,
      "emulator_auth_port": process.env.EMULATOR_AUTH_PORT
    }
  }
}
