import * as CryptoJS from "crypto-js";
import { createBlock } from "typescript";

/**
 * @variable index,hash,previousHash,data,timestamp
 */
class Block {
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

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

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
let blockChain: Block[] = [genesisBlock];

/**
 * Get BlockChain
 */
const getBlockChain = (): Block[] => blockChain;

/**
 * Get the lastest BlockChain
 */

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

/**
 * Get the new timestamp
 */
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 100);

/**
 *
 * @param data
 * Create new block
 */
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.caculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );

  /**
   * A new Block
   *
   * `newIndex` : Index+1 from index of `previousBlock(getLastBlock-1)`,
   *
   * `newHash` : data Combing of string and number,
   *
   * `previousBlock.hash` : hash value of Block class,
   *
   * `data` : just data,
   *
   * `newTimeStamp` : just new TimeStamp
   */
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

/**
 *
 * @param aBlock
 * @returns calculated hash
 */
const getHashforBlock = (aBlock: Block): string =>
  Block.caculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

/**
 * call candidate block and previous block
 */
const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockChain.push(candidateBlock);
  }
};

createNewBlock("second Block");
createNewBlock("third Block");
createNewBlock("fourth Block");

console.log(blockChain);

export {}; // 이 파일이 모듈이 될 수 있도록 고침
