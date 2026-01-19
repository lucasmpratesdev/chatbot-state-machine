class SelectPlanState {
  constructor(context) {
    this.context = context;
  }

  async execute(input) {
    if (!input) {
      console.log("Temos os seguintes planos:");
      console.log("1 - Básico (100MB)");
      console.log("2 - Intermediário (300MB)");
      console.log("3 - Premium (600MB)");
      console.log("Digite o número do plano:");
      return "SELECT_PLAN";
    }

    const plans = {
      "1": "Básico",
      "2": "Intermediário",
      "3": "Premium"
    };

    if (!plans[input]) {
      console.log("Plano inválido. Escolha 1, 2 ou 3.");
      return "SELECT_PLAN";
    }

    this.context.session.plan = plans[input];
    console.log(`Plano selecionado: ${plans[input]}`);
    console.log("Agora, informe seu CPF para análise de crédito:");
    return "ASK_CPF";
  }
}

module.exports = SelectPlanState;
