<h1 align="center">Login FullStack</h1>

<h1 align="center">:sparkles: Tecnologias</h1>
<p align="center">Esse projeto foi desenvolvido com</h1>
<br />

<p align="center"><a href="https://pt-br.reactjs.org/">ReactJs</a></p>
<p align="center"><a href="https://nodejs.org/en/">NodeJs</a></p>
<p align="center"><a href="https://www.mysql.com/">MySql</a></p>
<p align="center"><a href="https://expressjs.com/pt-br/">Express</a></p>
<p align="center"><a href="https://sequelize.org/">Sequelize</a></p>
<p align="center"><a href="https://jwt.io/">JWT</a></p>
<br />

<h1 align="center">:computer: Sobre o Projeto</h1>
<p align="center">Aplicação feita com ReactJs (frontend) e NodeJs (backend), em que consiste um fluxo de login, onde o usuário pode se cadastrar utilizando seus dados, e esses dados serão cadastrados em um banco SQL (MySql com Sequelize), após isso, é possível fazer o login na aplicação.
Nesse sistema o fluxo de login é utilizado JsonWebToken para persistência e autorização do usuário e usado o Bcrypt para criptografar a senha. Já no Front, as rotas são protegidas com autenticação e validação de token, para evitar burla de segurança.</p>
<br />

<h1 align="center">:rocket: Executando o Projeto</h1>
<p align="center">Comece clonando o repositório para sua máquina, usando</p>
<pre><strong>$ git clone https://github.com/marlleyck/login-fullstack</strong></pre>

<p align="center">Após isso, vá até a pasta do projeto</p>
<pre><strong>$ cd login-fullstack</strong></pre>

<p align="center">Instale todas as dependências, em cada pasta, usando o seu gerenciador de pacotes preferido</p>
<pre><strong>$ cd frontend && npm install</strong></pre>
<pre><strong>$ cd backend && npm install</strong></pre>
<p align="center">ou</p>
<pre><strong>$ cd frontend && yarn</strong></pre>
<pre><strong>$ cd backend && yarn</strong></pre>

<p align="center">Crie um arquivo ".env" na raíz da pasta "backend/" e coloque as informações do seu banco de dados seguindo o nome das variáveis que estão em "backend/src/database/index.js"</p>
<pre><strong>$ mkdir .env</strong></pre>

<br />

<p align="center">Por fim, basta iniciar os servidores, usando</p>
<pre><strong>$ cd frontend && npm run dev</strong></pre>
<pre><strong>$ cd backend && npm run dev</strong></pre>
<p align="center">ou</p>
<pre><strong>$ cd frontend && yarn dev</strong></pre>
<pre><strong>$ cd backend && yarn dev</strong></pre>

<p align="center">Feito! O projeto está pronto para ser utilizado!</p>


