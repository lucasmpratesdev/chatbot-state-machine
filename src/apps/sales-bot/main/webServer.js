const express = require("express");
const StateMachine = require("../chat/stateMachine");
const context = require("../chat/context");


const app = express();
app.use(express.json());
const path = require("path");
app.use(express.static(path.join(__dirname, "..", "web")));


let bot = new StateMachine(context);


app.post("/api/message", async (req, res) => {
  const { message } = req.body;

  try {
    const output = await bot.handle(message);
    res.json({ response: output });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno no bot" });
  }
});

app.listen(3000, () => {
  console.log("🌐 Front disponível em http://localhost:3000");
});
