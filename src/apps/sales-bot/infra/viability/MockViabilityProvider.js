class MockViabilityProvider {
  async check({ cep, plan }) {
    // Simula latência de API real
    await new Promise(r => setTimeout(r, 800));

    // Regra fake de viabilidade
    const lastDigit = parseInt(cep[cep.length - 1], 10);

    return {
      viable: lastDigit % 2 === 0,
      regionScore: Math.floor(Math.random() * 100),
      message: lastDigit % 2 === 0
        ? "Região com cobertura disponível"
        : "Região sem cobertura no momento"
    };
  }
}

module.exports = MockViabilityProvider;
