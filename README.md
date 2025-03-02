<h1 align="center">
    Academia Smile ✔
    <img alt="" src="" />
    <br>
</h1>

A ***Academia Smile*** tem como missão oferecer formação musical e teológica gratuita para aqueles que não possuem recursos financeiros para arcar com esses estudos. Por meio de conteúdos acessíveis, proporcionamos uma educação básica e intermediária, sem fins lucrativos, visando atender pessoas em situação de vulnerabilidade e promover o aprendizado nas áreas da música, teologia e educação.

#### Objetivo do projeto

- Aulas de Musicas:
As aulas musicais tera um objetivo principal, ensinar o aluno aos conceitos principais
  - Campo Harmonico
  - Escalas maiores e menores
  - Intervalos etc.

- Aulas de Teologia:
As aulas teologicas tera um objetivo principal, te dar um panorama geral dos primeiros passos para a formação teologica.
  - Introdução ao antigo testamento
  - Escatologia
  - Bibliologia

#### Estrutura do projeto

>[Figma do projeto]()

- **Frontend**: As telas terá uma estrutura de **Micro-frontends**, utilizando ***Angular*** na versão 17+, e terá uma estrutura basica, porém escalavel, preparada pra crescer se possivel.
  - **Shell**: MFE root, o principal, aonde irá conter o roteamento das rotas e redirects do sistema.
  - **User**: MFE do usuario, que irá conter as funcionalidades a nivel de aluno da plataforma.
  - **Admin**: MFE do admnistrador do sistema. irá conter as funcionalidades e permissão do Admin resposansavel pelo sistema.
---
- **Backend**:
  - **App**: Irá conter todo o codigo fonte do backend do projeto, escrito em Go.
---
- **Mobile**:
  - **App**: Irá conter todo o codigo fonte da versão mobile da plataforma, (Linguagem ainda em definição).

O projeto tera três niveis de acesso.

- Nivel Admin:
O administrador do sistema podera fazer alterações e implementações das novas funcionalidades do sistema, bem como realizar a manuntenção quando possivel.

- Nivel Usuario:
O usuario, que no caso é o aluno da plataforma, tera acesso ao cursos, trilhas e formações selecionadas na plataforma.

- Nivel Professor:
O professor terá acesso a plataforma, a nivel de edição de conteudo, para adicionar, remover ou alterar o conteudo da aula.

#### Dependências
- Designer
- UX
- Frontend
- Backend
- Mobile

#### Tecnologias utilizadas

- Angular 17+
- Golang
- MongoDB
