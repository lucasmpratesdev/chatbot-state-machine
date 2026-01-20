const ViaCepProvider = require("../infra/address/ViaCepProvider");
const ViabilityService = require("../domain/services/ViabilityService");
const MockViabilityProvider = require("../infra/viability/MockViabilityProvider");
const CreditService = require("../domain/services/CreditService");
const FileSalesRepository = require("../infra/persistence/FileSalesRepository");
const MetricsService = require("../domain/services/MetricsService");
const logger = require("../../../shared/logger");

const metrics = new MetricsService();
metrics.startSession();

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
  metrics,

  addressService: new ViaCepProvider(),

  viabilityService: new ViabilityService(
    new MockViabilityProvider(),
    logger
  ),

  creditService: new CreditService(logger),
  salesRepository: new FileSalesRepository(logger)
};
