// console.log("Hola desde javascript !!!");

// alert("hola");

// confirm("quieres borrar todo?");

// prompt("dime tu nombre");

const username = document.getElementById("username");
const password = document.getElementById("password");

const login = async () => {
  const user = { username: username.value, password: password.value };
  const respuesta = await fetch("http://localhost:4000/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  });
  const data = await respuesta.json();
  console.log(data); // Check the structure of the response
  if (data.isLogin) {
    console.log(data.user.user_id); // Check if user_id is properly set
    sessionStorage.setItem("user_id", data.user.user_id);
    sessionStorage.setItem("username", data.user.username);
    window.location = "/pages/home.html?id=" + data.user.user_id;
  } else {
    alert("credenciales incorrectas");
  }
  
};

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", login);

password.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    login();
  }
});
