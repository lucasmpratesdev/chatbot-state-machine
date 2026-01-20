class AskCpfState {
  constructor(context) {
    this.context = context;
  }

async execute(input) {
  const cpf = input.replace(/\D/g, "");

  if (cpf.length !== 11) {
    return { nextState: "ASK_CPF", message: "CPF inválido. Digite 11 números." };
  }

  this.context.session.cpf = cpf;
  return { nextState: "CREDIT_CHECK", message: "Consultando crédito..." };
}
}

module.exports = AskCpfState;
