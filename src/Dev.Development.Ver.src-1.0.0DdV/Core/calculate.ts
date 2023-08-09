/**
 * To calculate a string. "4 + 1 * 23" = 27
 */
export class calculate {
  _func: string[];

  constructor(_func: string[]) {
    this._func = _func;
  }

  run() {
    console.log(this._func);
  }
}

export class equalation {
  _func: string[];
  _formular: string;

  constructor(_func: string[], _formular: string) {
    this._func = _func;
    this._formular = _formular;
  }

  run() {
    let cache: string[] = this._formular.split(" ");
    console.log(cache);
  }
}
