class StartState {
  constructor(context) {
    this.context = context;
  }

  async execute() {
    console.log("Bem-vindo ao atendimento de vendas!");
    console.log("Para começar, informe seu CEP:");

    return "ASK_CEP";
  }
}

module.exports = StartState;
