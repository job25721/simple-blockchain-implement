import Block from "./block";

class BlockChain {
  public chain: Block[];

  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  public createGenesisBlock() {
    const genesisDate: string = "15/07/2020";
    const genesisBlock = new Block("Genesis block");
    genesisBlock.index = 0;
    genesisBlock.timeStamp = genesisDate;
    genesisBlock.prevHash = "0";
    genesisBlock.hash = genesisBlock.calculateHash();
    return genesisBlock;
  }

  public getLastBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  public addNewBlock(newBlock: Block) {
    newBlock.prevHash = this.getLastBlock().hash;
    newBlock.index = this.getLastBlock().index + 1;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  public isChainValid(): boolean {
    const chain = this.chain;
    for (let i = 0; i < chain.length; i++) {
      if (chain[i].hash !== chain[i].calculateHash()) {
        console.log("chain currupt!!!");
        return false;
      }
      if (chain[i].prevHash !== "0") {
        if (i - 1 < 0) {
          console.log("chain currupt!!!");
          return false;
        } else if (chain[i].prevHash !== chain[i - 1].hash) {
          console.log("chain currupt!!!");
          return false;
        }
      }
    }
    console.log("ข้อมูลปกติ");
    return true;
  }
}

export default BlockChain;
