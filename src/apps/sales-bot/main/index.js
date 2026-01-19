const readline = require("readline");
const StateMachine = require("../chat/stateMachine");
const context = require("../chat/context");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const bot = new StateMachine(context);

(async function start() {
  await bot.handle("");

  rl.on("line", async (input) => {
    await bot.handle(input);
  });
})();
