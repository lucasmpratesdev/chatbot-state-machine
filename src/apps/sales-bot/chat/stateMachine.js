const StartState = require("./states/startState");
const AskCepState = require("./states/askCepState");
const ConfirmAddressState = require("./states/confirmAddressState.js");
const CheckViabilityState = require("./states/checkViabilityState");
const SelectPlanState = require("./states/selectPlanState");
const AskCpfState = require("./states/askCpfState");
const CreditCheckState = require("./states/creditCheckState");
const FinishState = require("./states/finishState");
const RestartState = require("./states/restartState");



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
      FINISH: new FinishState(context),
      RESTART: new RestartState(context)
    };
    this.currentState = "START";
  }

async handle(input) {
  const state = this.states[this.currentState];
  const result = await state.execute(input);

  if (!result) return null;

  this.currentState = result.nextState;
  return result.message;
}
}

module.exports = StateMachine;
