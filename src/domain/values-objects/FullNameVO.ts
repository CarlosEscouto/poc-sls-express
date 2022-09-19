class FullNameVO {
  private _value: string;

  constructor(value: string) {
    if (value.includes(' '))
      throw new Error('Name and last name is required!');

    this._value = value;
  }

  get value() {
    return this._value;
  }
}