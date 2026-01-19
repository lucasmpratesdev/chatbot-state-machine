class CheckViabilityState {
  constructor(context) {
    this.context = context;
  }

  async execute() {
    const result = await this.context.viabilityService.check(
      this.context.session
    );

    this.context.session.viability = result;

    if (!result.viable) {
      console.log("❌ Viabilidade:");
      console.log(result.message);
      console.log("Encerrando atendimento.");
      return "ASK_CEP";
    }

    console.log("✅ Viabilidade aprovada!");
    console.log("Score da região:", result.regionScore);
    console.log("Perfeito. Vamos escolher um plano.");
    return "SELECT_PLAN";
  }
}

module.exports = CheckViabilityState;
