document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Verificando se o usuário já existe
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(user => user.email === email)) {
    alert("Usuário já cadastrado.");
    return;
  }

  // Adicionando novo usuário
  const newUser = { username, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Cadastro realizado com sucesso!");
});

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert("Login bem-sucedido!");
    window.location.href = "dashboard.html";  // Redireciona para a página de sucesso
  } else {
    alert("Credenciais inválidas.");
  }
});

