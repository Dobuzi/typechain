import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
    ): string =>
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (block: Block): boolean =>
        typeof block.index === "number" &&
        typeof block.hash === "string" &&
        typeof block.previousHash === "string" &&
        typeof block.timestamp === "number" &&
        typeof block.data === "string";

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const init = () => {
    const initiailBlock: Block = new Block(
        0,
        "sfl32kj3lkdslfkdfjl3rklfeksl",
        "",
        "Hello, World",
        202007241245
    );
    let blockchain: Block[] = [initiailBlock];

    const getBlockchain = (): Block[] => blockchain;
    const getLastBlock = (): Block => blockchain[blockchain.length - 1];
    const getNewTimestamp = (): number =>
        Math.round(new Date().getTime() / 1000);

    const createNewBlock = (data: string): Block => {
        const previousBlock: Block = getLastBlock();
        const newIndex: number = previousBlock.index + 1;
        const newTimestamp: number = getNewTimestamp();
        const newHash: string = Block.calculateBlockHash(
            newIndex,
            previousBlock.hash,
            newTimestamp,
            data
        );
        const newBlock: Block = new Block(
            newIndex,
            newHash,
            previousBlock.hash,
            data,
            newTimestamp
        );
        addBlock(newBlock);
        return newBlock;
    };

    const getHashForBlock = (block: Block): string =>
        Block.calculateBlockHash(
            block.index,
            block.previousHash,
            block.timestamp,
            block.data
        );

    const isBlockValid = (
        candidateBlock: Block,
        previousBlock: Block
    ): boolean => {
        if (
            !Block.validateStructure(candidateBlock) ||
            previousBlock.index + 1 !== candidateBlock.index ||
            previousBlock.hash !== candidateBlock.previousHash ||
            getHashForBlock(candidateBlock) !== candidateBlock.hash
        ) {
            return false;
        }
        return true;
    };

    const addBlock = (candidateBlock: Block): void => {
        if (isBlockValid(candidateBlock, getLastBlock())) {
            blockchain.push(candidateBlock);
        }
    };

    console.log(createNewBlock("gut super"));
    console.log(createNewBlock("Auf Wiedersehen"));
};

init();
