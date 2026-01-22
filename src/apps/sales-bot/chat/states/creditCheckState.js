class CreditCheckState {
  constructor(context) {
    this.context = context;
  }

async execute() {
  const approved = Math.random() > 0.3;
  this.context.session.creditApproved = approved;

  return {
    nextState: "FINISH",
    message: approved ? "Crédito aprovado!\n" : "Crédito não aprovado.\n"
  };
}
}

module.exports = CreditCheckState;
