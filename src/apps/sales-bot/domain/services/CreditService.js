class CreditService {
  constructor(logger) {
    this.logger = logger;
  }

  async check(session) {
    this.logger.info("Consultando crédito", {
      cpf: session.cpf,
      plan: session.plan
    });

    await new Promise(resolve => setTimeout(resolve, 800));

    const lastDigit = parseInt(session.cpf?.slice(-1), 10) || 0;
    const approved = lastDigit % 2 === 0;
    const score = Math.floor(Math.random() * 100);

    return {
      approved,
      score,
      message: approved
        ? "Crédito aprovado"
        : "Crédito reprovado"
    };
  }
}

module.exports = CreditService;
