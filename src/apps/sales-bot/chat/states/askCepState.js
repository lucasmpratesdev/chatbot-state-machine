class AskCepState {
  constructor(context) {
    this.context = context;
  }

  async execute(input) {
    const cep = (input || "").replace(/\D/g, "");

    if (cep.length !== 8) {
      return {
        nextState: "ASK_CEP",
        message: "CEP inválido. Digite apenas números (8 dígitos)."
      };
    }

    try {
      const address = await this.context.addressService.getByCep(cep);

      this.context.session.cep = cep;
      this.context.session.address = address;

      return {
        nextState: "CONFIRM_ADDRESS",
        message: `Endereço encontrado:\n\n${address.street}, ${address.district} - ${address.city}/${address.state}\n\nEsse endereço está correto? (sim/não)`
      };
    } catch (err) {
      return {
        nextState: "ASK_CEP",
        message: "Erro ao consultar CEP. Tente novamente."
      };
    }
  }
}

module.exports = AskCepState;
