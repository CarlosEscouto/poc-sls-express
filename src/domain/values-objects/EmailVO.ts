class EmailVO {
  private _value: string;

  constructor(value: string) {
    if (value.includes('@'))
      throw new Error('Email is invalid!')

    this._value = value;
  }

  get value() {
    return this._value;
  }
}