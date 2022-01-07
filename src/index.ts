/**
 * @variable index,hash,previousHash,data,timestamp
 */
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

/** genesisBlock is new Block */
const genesisBlock: Block = new Block(0, "2020202020", "", "hello", 123433542);

/**`blockChain`: the array of `Block` Class */
let blockChain: [Block] = [genesisBlock];

console.log(blockChain);

export {}; // 이 파일이 모듈이 될 수 있도록 고침
