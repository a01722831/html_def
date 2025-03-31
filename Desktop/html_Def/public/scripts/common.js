window.onload = () => {
  if (!sessionStorage.username) {
    // window.location = "../index.html";
  } else {
    const menuGame = document.getElementById("menuGame");
    menuGame.setAttribute("href", "./game.html?id=" + sessionStorage.user_id);
	const h1 = document.getElementById("saludo");
	h1.innerHTML = "hola " + sessionStorage.username;
  }
};

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  sessionStorage.clear();
});
