class ConfirmAddressState {
  constructor(context) {
    this.context = context;
  }

  async execute(input) {
    const answer = input.toLowerCase();

    if (answer === "sim" || answer === "s") {
      console.log("Perfeito. Estamos verificando a viabilidade na região");
      return "CHECK_VIABILITY";
    }

    if (answer === "não" || answer === "nao" || answer === "n") {
      console.log("Sem problema. Informe o CEP novamente:");
      this.context.session.cep = null;
      this.context.session.address = null;
      return "ASK_CEP";
    }

    console.log("Responda apenas com sim ou não.");
    return "CONFIRM_ADDRESS";
  }
}

module.exports = ConfirmAddressState;
