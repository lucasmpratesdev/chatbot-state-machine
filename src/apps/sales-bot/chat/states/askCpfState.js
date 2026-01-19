class AskCpfState {
  constructor(context) {
    this.context = context;
  }

  async execute(input) {
    const cpf = input.replace(/\D/g, "");

    if (cpf.length !== 11) {
      console.log("CPF inválido. Digite 11 números.");
      return "ASK_CPF";
    }

    this.context.session.cpf = cpf;
    console.log("Consultando crédito...");
    return "CREDIT_CHECK";
  }
}

module.exports = AskCpfState;
