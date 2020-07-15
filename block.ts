import { SHA256 } from "crypto-js";

export default class Block {
  public data: any;
  public index: number;
  public timeStamp: string;
  public hash: string;
  public prevHash: string;

  constructor(data: any) {
    this.data = data;
    this.timeStamp = String(new Date());
  }

  public calculateHash(): string {
    const hashValue: string =
      JSON.stringify(this.data) + this.index + this.timeStamp + this.prevHash;
    return SHA256(hashValue).toString();
  }
}
