class RestartState {
  constructor(context) {
    this.context = context;
  }

  async execute(input) {
    if (!input || input.toLowerCase() !== "sim") {
      return {
        nextState: "START",
        message: "Atendimento encerrado. Digite qualquer coisa para iniciar novamente."
      };
    }

    this.context.session = {
      cep: null,
      address: null,
      plan: null,
      cpf: null,
      creditApproved: null,
      viability: null
    };

    return {
      nextState: "ASK_CEP",
      message: "Novo atendimento iniciado. Informe seu CEP:"
    };
  }
}

module.exports = RestartState;
