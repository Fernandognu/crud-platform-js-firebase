class Pessoa {
  constructor(nome, nascimento, email, telefone) {
    if (typeof nascimento == 'string') {
      nascimento = DateHelper.textoParaData(nascimento);
    }

    this._nome = nome;
    this._datanasc = new Date(nascimento.getTime());
    this._email = email;
    this._telefone = telefone;
    this._ativo = true;

    ConexaoBanco.writeData(
      this._nome,
      this._datanasc,
      this._email,
      this._telefone
    );

    Object.freeze(this);
  }

  get nome() {
    return this._nome;
  }

  get _datanasc() {
    return new Date(this._datanasc.getTime());
  }

  get email() {
    return this.email;
  }

  get telefone() {
    return this._telefone;
  }

  get ativo() {
    return this._ativo;
  }
}
