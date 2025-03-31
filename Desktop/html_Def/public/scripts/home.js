const iGame = document.getElementById("iGame");
iGame.setAttribute("src", "./game/index.html?id=" + sessionStorage.user_id);

const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const send = document.getElementById("send");

const sendMsg = () => {
  chat.value += "\n" + msg.value;
  msg.value = "";
};

send.addEventListener("click", sendMsg);

msg.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMsg();
  }
});
