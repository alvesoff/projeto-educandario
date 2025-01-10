document.getElementById("admin-login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("admin-login-email").value;
    const password = document.getElementById("admin-login-password").value;

    // O e-mail e senha específicos para login
    const adminEmail = "admin@eduprojeto.com";
    const adminPassword = "adm123";  // Altere se necessário

    // Verifica as credenciais de login
    if (email === adminEmail && password === adminPassword) {
      alert("Login de administrador bem-sucedido!");
      window.location.href = "/admn/admin.html";  // Redireciona para o painel administrativo
    } else if (email === adminEmail) {
      alert("Senha incorreta.");
    } else {
      alert("Use o Perfil de Administrador.");
    }
});
