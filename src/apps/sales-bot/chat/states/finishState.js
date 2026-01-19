class FinishState {
  constructor(context) {
    this.context = context;
  }

  async execute() {
    const { address, plan, cpf, creditApproved } = this.context.session;

    console.log("=== RESUMO DA VENDA ===");
    console.log("Endereço:", address);
    console.log("Plano:", plan);
    console.log("CPF:", cpf);
    console.log("Crédito aprovado:", creditApproved ? "Sim" : "Não");
    console.log("=======================");
    console.log("Atendimento finalizado. Obrigado!");

    process.exit(0);
  }
}

module.exports = FinishState;
