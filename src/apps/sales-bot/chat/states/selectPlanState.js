class SelectPlanState {
  constructor(context) {
    this.context = context;
  }

  async execute(input) {
    const plans = {
      "1": "Básico",
      "2": "Intermediário",
      "3": "Premium"
    };

    if (!input) {
      return {
        nextState: "SELECT_PLAN",
        message:
          "Temos os seguintes planos:\n" +
          "1 - Básico (100MB)\n" +
          "2 - Intermediário (300MB)\n" +
          "3 - Premium (600MB)\n" +
          "Digite o número do plano:"
      };
    }

    const plan = plans[input.trim()];

    if (!plan) {
      return {
        nextState: "SELECT_PLAN",
        message: "Plano inválido. Escolha 1, 2 ou 3."
      };
    }

    this.context.session.plan = plan;

    return {
      nextState: "ASK_CPF",
      message: `Plano selecionado: ${plan}\nAgora, informe seu CPF para análise de crédito:`
    };
  }
}

module.exports = SelectPlanState;
