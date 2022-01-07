import * as CryptoJS from "crypto-js";

/**
 * @variable index,hash,previousHash,data,timestamp
 */
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  /**
   * @variable calculate a hash
   */
  static caculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

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

Block.caculateBlockHash;

/** genesisBlock is new Block */
const genesisBlock: Block = new Block(0, "2020202020", "", "hello", 123433542);

/**`blockChain`: the array of `Block` Class */
let blockChain: Block[] = [genesisBlock];

/**
 * Get BlockChain
 */
const getBlockChain = (): Block[] => blockChain;

/**
 * Get the last BlockChain
 */

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

/**
 * Get the new timestamp
 */
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 100);

export {}; // 이 파일이 모듈이 될 수 있도록 고침
