class CheckViabilityState {
  constructor(context) {
    this.context = context;
  }

async execute() {
  const result = await this.context.viabilityService.check(this.context.session);
  this.context.session.viability = result;

  if (!result.viable) {
    return {
      nextState: "ASK_CEP",
      message: `❌ ${result.message}\nInforme o CEP novamente:`
    };
  }

  return {
    nextState: "SELECT_PLAN",
    message: `✅ Viabilidade aprovada!\nScore: ${result.regionScore}\nVamos escolher um plano.`
  };
}
}

module.exports = CheckViabilityState;
