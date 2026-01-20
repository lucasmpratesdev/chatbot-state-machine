class StartState {
  constructor(context) {
    this.context = context;
  }

  async execute() {
    return {
      nextState: "ASK_CEP",
      message: "Bem-vindo ao atendimento de vendas!\nPara começar, informe seu CEP:"
    };
  }
}

module.exports = StartState;
