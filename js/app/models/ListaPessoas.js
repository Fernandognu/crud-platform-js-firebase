class ListaPessoas {
  constructor() {
    this._pessoas = [];
  }

  adiciona(pessoa) {
    this._pessoas.push(pessoa);
  }

  get negociacoes() {
    return [].concat(this._pessoas);
  }

  getCount() {
    return this._pessoas.length;
  }

  getAverage() {
    var i = null;
    var hoje = new Date();
    var somaIdade = 0.0;

    for (var pessoa in this._pessoas) {
      var obj = this._pessoas[pessoa];
      somaIdade += hoje.getFullYear() - obj.datanasc.getFullYear();
    }

    if (this._pessoas.length > 0) return somaIdade / this._pessoas.length;
    else return 0;
  }
}
