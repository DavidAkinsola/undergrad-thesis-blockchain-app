const SHA256 = require('crypto-js/sha256');

class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

/*
creat class BLOCK with default constructor
index - where the block stands on the chain
timestape - when block was created
data - information about the block (sender, receiver, how much mony transferred)
previousHash - the previous hash on the link - imporves intrgrity
hash - hash value of block
*/
class Block{
    constructor(timestamp, transactions, previousHash = ''){
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
//uses SHA256 to generate the hash based from block info
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)+ this.nonce).toString();
    }

    mineBlock(difficulty){
        while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }
}

class Blockchain{
    //this.chain stores the array of blocks
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }
//information about the first block - does not point to anything
    createGenesisBlock(){
        return new Block(0, "01/04/2022", "Genesis block", "0");
    }
//gets the last block on the chain
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);

        console.log("Block sucessfully mined");
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];

        //note miningreward = 100
    }

    createTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }

                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }
//add new block to blockchain
//get previous block hash
//calculate new hash
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        //newBlock.hash = newBlock.calculateHash();
        //above line commented for addition of blockchain proof of work
        newBlock.mineBlock(this.difficulty);
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
coin.createTransaction(new Transaction("address1", "address2", 100));
coin.createTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting miner...");
coin.minePendingTransactions("dav-address");

console.log("\n Balance of dav is ", coin.getBalanceOfAddress("dav-address"));

console.log("\n Starting miner...");
coin.minePendingTransactions("dav-address");

console.log("\n Balance of dav is ", coin.getBalanceOfAddress("dav-address"));

console.log("\n Starting miner...");
coin.minePendingTransactions("dav-address");

console.log("\n Balance of dav is ", coin.getBalanceOfAddress("dav-address"));

/*
video ref 
https://www.youtube.com/watch?v=zVqczFZr124&list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4
*/