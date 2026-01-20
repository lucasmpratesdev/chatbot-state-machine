const fs = require("fs");
const path = require("path");
const SalesRepository = require("../../domain/repositories/SalesRepository");

class FileSalesRepository extends SalesRepository {
  constructor(logger) {
    super();
    this.logger = logger;
    this.filePath = path.join(__dirname, "sales.jsonl");

    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, "");
    }
  }

  async save(sale) {
    const record = {
      ...sale,
      timestamp: new Date().toISOString()
    };

    fs.appendFileSync(this.filePath, JSON.stringify(record) + "\n");

    this.logger.info("Venda persistida", {
      cep: sale.address?.cep,
      plan: sale.plan,
      creditApproved: sale.creditApproved
    });
  }
}

module.exports = FileSalesRepository;
