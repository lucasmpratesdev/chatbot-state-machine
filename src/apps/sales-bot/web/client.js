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

async function sendMessage(msg) {
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

    // Se a mensagem do bot requer input do usuário, envie automaticamente
    if (data.response && data.response.includes("Informe")) {
      setTimeout(() => {
        input.value = "sim"; // ou outro valor padrão, se aplicável
        sendMessage(input.value);
      }, 1000); // delay para simular input
    }

  } catch (err) {
    addMessage("Erro ao conectar com o servidor", "bot");
  }
}

sendBtn.addEventListener("click", () => sendMessage(input.value));

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    sendMessage(input.value);
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
