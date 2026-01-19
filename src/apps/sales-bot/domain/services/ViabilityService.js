class ViabilityService {
  constructor(provider, logger) {
    this.provider = provider;
    this.logger = logger;
  }

  async check(session) {
    this.logger.info("Consultando viabilidade", {
      cep: session.cep,
      plan: session.plan
    });

    return this.provider.check(session);
  }
}

module.exports = ViabilityService;