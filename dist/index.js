"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (block) => typeof block.index === "number" &&
    typeof block.hash === "string" &&
    typeof block.previousHash === "string" &&
    typeof block.timestamp === "number" &&
    typeof block.data === "string";
const init = () => {
    const initiailBlock = new Block(0, "sfl32kj3lkdslfkdfjl3rklfeksl", "", "Hello, World", 202007241245);
    let blockchain = [initiailBlock];
    const getBlockchain = () => blockchain;
    const getLastBlock = () => blockchain[blockchain.length - 1];
    const getNewTimestamp = () => Math.round(new Date().getTime() / 1000);
    const createNewBlock = (data) => {
        const previousBlock = getLastBlock();
        const newIndex = previousBlock.index + 1;
        const newTimestamp = getNewTimestamp();
        const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
        const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
        addBlock(newBlock);
        return newBlock;
    };
    const getHashForBlock = (block) => Block.calculateBlockHash(block.index, block.previousHash, block.timestamp, block.data);
    const isBlockValid = (candidateBlock, previousBlock) => {
        if (!Block.validateStructure(candidateBlock) ||
            previousBlock.index + 1 !== candidateBlock.index ||
            previousBlock.hash !== candidateBlock.previousHash ||
            getHashForBlock(candidateBlock) !== candidateBlock.hash) {
            return false;
        }
        return true;
    };
    const addBlock = (candidateBlock) => {
        if (isBlockValid(candidateBlock, getLastBlock())) {
            blockchain.push(candidateBlock);
        }
    };
    console.log(createNewBlock("gut super"));
    console.log(createNewBlock("Auf Wiedersehen"));
};
init();
//# sourceMappingURL=index.js.map