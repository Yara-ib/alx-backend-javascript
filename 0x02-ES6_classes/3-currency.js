export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter & Setter for code
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  // Getter & Setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
