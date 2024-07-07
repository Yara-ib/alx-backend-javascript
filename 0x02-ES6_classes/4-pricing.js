export default class Pricing {
  constructor(amount, Currency) {
    this.amount = amount;
    this.currency = Currency;
  }

  // Getter & Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  // Getter & Setter for currency
  get currency() {
    return this._currency;
  }

  set currency(Currency) {
    this._currency = Currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
