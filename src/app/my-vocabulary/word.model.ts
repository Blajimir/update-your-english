/**
 * Created by a.a.kovalev on 08.06.2017.
 */
export class Word {
  value: string;
  rate: number;

  constructor(word: string, rate?:number) {
    this.value = word;
    this.rate = rate?rate:0;
  }

  toString(): string {
    return this.value;
  }
}
