class AskCepState {
  constructor(context) {
    this.context = context;
  }

  async execute(input) {
    const cep = input.replace(/\D/g, "");

    if (cep.length !== 8) {
      console.log("CEP inválido. Digite apenas números (8 dígitos).");
      return "ASK_CEP";
    }

    try {
      const address = await this.context.addressService.getByCep(cep);

      this.context.session.cep = cep;
      this.context.session.address = address;

      console.log("Endereço encontrado:");
      console.log(
        `${address.street}, ${address.district} - ${address.city}/${address.state}`
      );
      console.log("Esse endereço está correto? (sim/não)");

      return "CONFIRM_ADDRESS";
    } catch (err) {
      console.log("Erro ao consultar CEP. Tente novamente.");
      return "ASK_CEP";
    }
  }
}

module.exports = AskCepState;
