const SHA256 = require('crypto-js/sha256');

/*
creat class BLOCK with default constructor
index - where the block stands on the chain
timestape - when block was created
data - information about the block (sender, receiver, how much mony transferred)
previousHash - the previous hash on the link - imporves intrgrity
hash - hash value of block
*/
class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
//uses SHA256 to generate the hash based from block info
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    //this.chain stores the array of blocks
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }
//information about the first block - does not point to anything
    createGenesisBlock(){
        return new Block(0, "01/04/2022", "Genesis block", "0");
    }
//gets the last block on the chain
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }
//add new block to blockchain
//get previous block hash
//calculate new hash
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
//checks the validity of the blockchain
//let i = 1 because we are not checking for first block

    isChainValid(){
        for(let i = 1; i<this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

//checks if each block produces the hash associated with it
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

//checks if the hash associated with each block is references in previous block of next block
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }

           
        } 
        
        return true;
    }
}

//instantiate new blockchain
let coin = new Blockchain();
coin.addBlock(new Block(1, "10/04/2017", {amount: 4}));
coin.addBlock(new Block(2, "11/04/2017", {amount: 10}));
//display blockchain
//console.log(JSON.stringify(coin, null, 4));

//returns true
console.log("valid?: " + coin.isChainValid());
//tamper with blockchain
coin.chain[1].data = {amount: 100};
//playing smart - switching the hash
coin.chain[1].hash = coin.chain[1].calculateHash();
//returns false - blockchain has been tampered
console.log("valid?: " + coin.isChainValid());

/*
video ref 
https://www.youtube.com/watch?v=zVqczFZr124&list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4
*/