class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
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
    let blockchain: [Block] = [initiailBlock];
    console.log(blockchain);
};

init();
