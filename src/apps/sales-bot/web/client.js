const chat = document.getElementById("chat");
const input = document.getElementById("input");
const sendBtn = document.getElementById("send");

function addMessage(text, cls) {
  const div = document.createElement("div");
  div.className = cls;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage() {
  const msg = input.value.trim();
  if (!msg) return;

  addMessage(msg, "user");
  input.value = "";

  try {
    const res = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });

    const data = await res.json();
    addMessage(data.response || "Erro no servidor", "bot");
  } catch (err) {
    addMessage("Erro ao conectar com o servidor", "bot");
  }
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// inicia conversa
(async function start() {
  try {
    const res = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "" })
    });

    const data = await res.json();
    addMessage(data.response || "Bot iniciado", "bot");
  } catch {
    addMessage("Não foi possível iniciar o bot", "bot");
  }
})();
