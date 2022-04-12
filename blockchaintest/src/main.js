const {Blockchain, Transaction} = require('./blockchain.js');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

//const key = ec.genKeyPair();
//const publicKey = key.getPrivate('hex');
//const myKey = ec.keyFromPrivate(publicKey);
const myKey = ec.keyFromPrivate('058bd768ca184b3e63ba1d143693cff208f22f49a51e54eb67a22aec12f3c301');
const mywalletAddress = myKey.getPublic('hex');

//instantiate new blockchain
let coin = new Blockchain();
console.log(mywalletAddress);
const tx1 = new Transaction(mywalletAddress, 'public key goes here', 10);

tx1.signTransaction(myKey);
coin.addTransaction(tx1);

console.log("\n Starting miner...");
coin.minePendingTransactions(mywalletAddress);

console.log("\n Balance of dav is ", coin.getBalanceOfAddress(mywalletAddress));

//coin.chain[1].transactions[0].amount = 1;
//invalid input - false value

console.log()
console.log('chain valid?', coin.isChainValid());

console.log(JSON.stringify(coin, null, 4));

/*
video ref 
https://www.youtube.com/watch?v=zVqczFZr124&list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4
*/