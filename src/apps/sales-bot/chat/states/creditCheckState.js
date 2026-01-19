class CreditCheckState {
  constructor(context) {
    this.context = context;
  }

  async execute() {
    // Mock de score
    const approved = Math.random() > 0.3;

    this.context.session.creditApproved = approved;

    if (!approved) {
      console.log("Crédito não aprovado. Encerrando atendimento.");
      return "FINISH";
    }

    console.log("Crédito aprovado!");
    return "FINISH";
  }
}

module.exports = CreditCheckState;
