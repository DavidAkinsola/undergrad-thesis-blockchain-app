const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log("public key:", publicKey);
console.log("\nprivate key:", privateKey);

/*
0436ae1350f524a3926e66164db47c4dcfb35c45c4b628a344d3497a653cc6329951e546f569a95bf0c6dacd398cca77d6d8aa43ecace119fe1978c1a9a1cc2422

private key: 058bd768ca184b3e63ba1d143693cff208f22f49a51e54eb67a22aec12f3c301
*/

