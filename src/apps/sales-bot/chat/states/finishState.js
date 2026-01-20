class FinishState {
  constructor(context) {
    this.context = context;
  }

async execute() {
  const { session, salesRepository, metrics, logger } = this.context;

  const sale = {
    address: session.address,
    plan: session.plan,
    cpf: session.cpf,
    creditApproved: session.creditApproved,
    viability: session.viability,
    timestamp: new Date().toISOString()
  };

  await salesRepository.save(sale);
  metrics.recordSale(session.plan, session.creditApproved);
  logger.info("Venda finalizada", sale);

  const addressText = sale.address
  ? `${sale.address.street}, ${sale.address.district} - ${sale.address.city}/${sale.address.state}`
  : "Não informado";

  
  return {
    nextState: "RESTART",
    message:
      `=== RESUMO DA VENDA ===\n` +
      `Endereço: ${addressText}\n` +
      `Plano: ${sale.plan}\nCPF: ${sale.cpf}\n` +
      `Crédito aprovado: ${sale.creditApproved ? "Sim" : "Não"}\n\n` +
      `Deseja realizar uma nova compra? (sim/não)`
  };
}
}

module.exports = FinishState;
