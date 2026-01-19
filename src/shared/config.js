const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  env: {
    nodeEnv: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000
  },
  apis: {
    viacep: {
      baseUrl: "https://viacep.com.br/ws"
    }
  }
};
