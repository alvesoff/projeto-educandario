Sistema de Inscrição e Login
Este projeto consiste em um sistema simples de inscrição e login, utilizando HTML, CSS e JavaScript. O sistema permite o cadastro de novos usuários, autenticação de usuários existentes e login de administradores.

Estrutura do Projeto
O projeto é composto por três páginas principais:

index.html: Página principal com formulários de cadastro e login.
admn/admin-login.html: Página de login exclusiva para administradores.
style.css: Arquivo de estilos utilizado em ambas as páginas.
register.js: Arquivo JavaScript que gerencia a lógica de cadastro e login.
admin-login.js: Arquivo JavaScript para a lógica de login de administrador.
Funcionalidades
Cadastro de Usuário
O formulário de cadastro permite que um usuário insira um nome de usuário, e-mail e senha. Quando o formulário é enviado, os dados são armazenados no LocalStorage do navegador.

Login de Usuário
O formulário de login permite que um usuário insira seu e-mail e senha. O sistema verifica se as credenciais informadas correspondem aos dados armazenados no LocalStorage e, se válidas, o usuário é autenticado.

Login de Administrador
A página admin-login.html permite que um administrador faça login utilizando e-mail e senha. A lógica de validação é semelhante à do login de usuários.

Como Usar
Clone este repositório:

bash
Copiar código
git clone https://github.com/usuario/nome-do-repositorio.git
Navegue até a pasta do projeto:

bash
Copiar código
cd nome-do-repositorio
Abra o arquivo index.html no seu navegador para testar os formulários de cadastro e login.

Acesse a página de login do administrador em /admn/admin-login.html.

Tecnologias Usadas
HTML: Para a estruturação das páginas.
CSS: Para a estilização das páginas.
JavaScript: Para a implementação da lógica de cadastro, login e autenticação utilizando LocalStorage.
LocalStorage
O LocalStorage é utilizado para armazenar os dados de autenticação de usuários e administradores. Ao cadastrar um novo usuário, as informações de e-mail e senha são armazenadas localmente no navegador, permitindo a validação no momento do login.

Cadastro: Os dados são armazenados usando localStorage.setItem().
Login: Os dados são recuperados com localStorage.getItem() e comparados com as credenciais fornecidas.
