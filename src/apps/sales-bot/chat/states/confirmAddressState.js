class ConfirmAddressState {
  constructor(context) {
    this.context = context;
  }

async execute(input) {
  const answer = input.toLowerCase();

  if (answer === "sim" || answer === "s") {
    return {
      nextState: "CHECK_VIABILITY",
      message: "Perfeito. Verificando viabilidade..."
    };
  }

  if (answer === "não" || answer === "nao" || answer === "n") {
    this.context.session.cep = null;
    this.context.session.address = null;
    return {
      nextState: "ASK_CEP",
      message: "Sem problema. Informe o CEP novamente:"
    };
  }

  return {
    nextState: "CONFIRM_ADDRESS",
    message: "Responda apenas com sim ou não."
  };
}
}

module.exports = ConfirmAddressState;
