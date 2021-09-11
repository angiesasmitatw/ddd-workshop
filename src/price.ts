export class Price {
  public readonly currency: string;
  public readonly amount: number;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
}
