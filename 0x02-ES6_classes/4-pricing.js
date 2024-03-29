import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw TypeError('amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof (Currency)) {
      this._currency = value;
    }
    throw TypeError('currency must be an instance of Currency');
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
