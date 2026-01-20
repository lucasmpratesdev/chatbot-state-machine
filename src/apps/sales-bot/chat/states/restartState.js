class RestartState {
  constructor(context) {
    this.context = context;
  }

async execute(input) {
  if (input.toLowerCase() !== "sim") {
    return { nextState: null, message: "Encerrando atendimento." };
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
