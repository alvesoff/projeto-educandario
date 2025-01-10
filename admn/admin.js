// Função para salvar o usuário no localStorage
function saveUserToLocalStorage(username, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  // Função para mostrar alerta de sucesso
  function showAlert(message) {
    alert(message);
  }
  
  // Event listener para o envio do formulário
  document.getElementById('admin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obtendo os valores dos campos
    const username = document.getElementById('admin-username').value;
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
  
    // Salvando o novo usuário no localStorage
    saveUserToLocalStorage(username, email, password);
  
    // Exibindo o alerta de sucesso
    showAlert('Usuário cadastrado com sucesso!');
  
    // Limpando o formulário após o cadastro
    document.getElementById('admin-form').reset();
  });
  