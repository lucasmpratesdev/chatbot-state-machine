const StartState = require("./states/startState");
const AskCepState = require("./states/askCepState");
const ConfirmAddressState = require("./states/confirmAddressState.js");
const CheckViabilityState = require("./states/checkViabilityState");
const SelectPlanState = require("./states/selectPlanState");
const AskCpfState = require("./states/askCpfState");
const CreditCheckState = require("./states/creditCheckState");
const FinishState = require("./states/finishState");


class StateMachine {
  constructor(context) {
    this.context = context;
    this.states = {
      START: new StartState(context),
      ASK_CEP: new AskCepState(context),
      CONFIRM_ADDRESS: new ConfirmAddressState(context),
      CHECK_VIABILITY: new CheckViabilityState(context),
      SELECT_PLAN: new SelectPlanState(context),
      ASK_CPF: new AskCpfState(context),
      CREDIT_CHECK: new CreditCheckState(context),
      FINISH: new FinishState(context)
    };
    this.currentState = "START";
  }

  async handle(input) {
    const state = this.states[this.currentState];
    const nextState = await state.execute(input);
    this.currentState = nextState;
  }
}

module.exports = StateMachine;
