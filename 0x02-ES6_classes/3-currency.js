export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw TypeError('code must be a string');
    }
    this._code = value;
  }

  get name() {
    return this._code;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('name must be a string');
    }
    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} ` + `(${this._code})`;
  }
}