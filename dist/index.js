class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const init = () => {
    const initiailBlock = new Block(0, "sfl32kj3lkdslfkdfjl3rklfeksl", "", "Hello, World", 202007241245);
    let blockchain = [initiailBlock];
    console.log(blockchain);
};
init();
//# sourceMappingURL=index.js.map