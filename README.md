# 👥 Gerenciamento de Usuários - Dashboard

Um painel administrativo para cadastro e gerenciamento de usuários. O projeto possui uma interface moderna baseada no template AdminLTE e foi desenvolvido inteiramente com HTML, CSS e JavaScript, utilizando Programação Orientada a Objetos (POO) para estruturar os dados e o comportamento da aplicação.

## ✨ Funcionalidades

* **CRUD Completo:** Criação, leitura, atualização e exclusão de usuários na tabela.
* **Persistência de Dados:** Todos os usuários cadastrados são salvos automaticamente no `localStorage` do navegador, garantindo que os dados não sejam perdidos ao recarregar a página.
* **Upload e Pré-visualização de Fotos:** Suporte para envio de imagens de perfil, utilizando a API `FileReader` (Promises) para converter a imagem em Base64 e exibi-la imediatamente.
* **Dashboard Estatístico:** Contadores dinâmicos no topo da tela que calculam em tempo real o número de "Novos Usuários" e "Administradores" cadastrados.
* **Validação de Formulários:** Destaque visual (has-error) para campos obrigatórios (Nome, E-mail e Senha) caso o usuário tente enviar o formulário em branco.
* **Formatação de Datas:** Utilização de classes utilitárias para formatar a data de registro padrão (dd/mm/aaaa hh:mm).

## 📁 Estrutura de Arquivos

```text
/
├── index.html                           # Interface do painel administrativo
├── script.js                            # Arquivo de inicialização (Instancia o UserController)
├── classes/
│   └── Utils.js                         # Métodos utilitários (ex: formatação de datas)
├── models/
│   └── User.js                          # Classe de modelo com atributos do usuário e regras do localStorage
└── controllers/
    └── UserController.js                # Regras de negócio, manipulação do DOM e eventos dos formulários