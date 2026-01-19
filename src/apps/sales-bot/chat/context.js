const ViaCepProvider = require("../infra/address/ViaCepProvider");
const ViabilityService = require("../domain/services/ViabilityService");
const MockViabilityProvider = require("../infra/viability/MockViabilityProvider");
const logger = require("../../../shared/logger");

module.exports = {
  session: {
    cep: null,
    address: null,
    plan: null,
    cpf: null,
    creditApproved: null,
    viability: null
  },

  logger,

  addressService: new ViaCepProvider(),

  viabilityService: new ViabilityService(
    new MockViabilityProvider(),
    logger
  )
};
