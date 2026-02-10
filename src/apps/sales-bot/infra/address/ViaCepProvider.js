const axios = require("axios");
const { apis } = require("../../../../shared/config");

class ViaCepProvider {
  async getByCep(cep) {
    const url = `${apis.viacep.baseUrl}/${cep}/json`;

    const response = await axios.get(url, {
      timeout: 10000
    });

    if (response.data.erro) {
      throw new Error("CEP não encontrado");
    }

    return {
      cep: response.data.cep,
      street: response.data.logradouro,
      district: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf
    };
  }
}

module.exports = ViaCepProvider;
