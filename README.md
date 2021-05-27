## Consultas úteis durante o desenvolvimento

[Google Sign-in docs](https://developers.google.com/identity/sign-in/web/sign-in)

[(Add Google Sign-In and Sign-Out to your React App and get the AccessToken)](https://zoejoyuliao.medium.com/add-google-sign-in-and-sign-out-to-your-react-app-and-get-the-accesstoken-2ee16bfd8297)

[Login with Google in web application](https://prachisown.medium.com/login-with-google-in-web-application-react-js-4db16f704889)

[Context com Hooks - vídeo bom pra caramba](https://www.youtube.com/watch?v=FsCBw9X9U84)

[Context com Hooks - vídeo que não vi e pode ser bom também](https://www.youtube.com/watch?v=D_yxtCD_Vi0)

[React Context API - persist data on page refresh](https://stackoverflow.com/questions/53453861/react-context-api-persist-data-on-page-refresh)

[React Router docs](https://reactrouter.com/web/guides/quick-start)

### O que aprendemos aqui:

-   Compreensão sobre geração de clientID para o GoogleAuth
-   Artigos e links do Stack Overflow são essenciais para seguir em frente
-   Importação de componente (react-google-login)
-   React Context e suas aplicações
-   Navegação usando React Router

## Roteiro

```git clone https://github.com/jmfantin2/poc-google-login.git``` (clona repositório)

```cd poc-google-login``` (entra no projeto)

```code .``` (roda no vscode)

```yarn``` (instala dependências)

```yarn start``` (executa no localhost)

### src/App.js

"O app fica encapsulado pelo **Provider** de autenticação, que tá lá em `context`."

### src/context/GoogleAuth.js 

"Esse context é responsável por observar a variável que armazena o token em caso de login. Ele exporta o Provider, que é responsável por fazer a aplicação enxergar essa variável, e a variável em si, pra que outras partes do código possam atualizar o token." 

### src/components/GoogleBtn/index.js 

"O botão guarda os métodos pra tratar o login e o logout, e isso só funciona se foi emitido uma CLIENT_ID por uma conta Google no console de desenvolvimento deles (vamos precisar de uma conta melhor pra gerar e proteger essa ID). Se o usuário escolhe uma conta Google na janela que abre, o token do context é atualizado pra um valor não nulo, e a aplicação inteira enxerga essa mudança."

### src/pages/Home/index.js 

"Aqui a gente quer usar a variável do token pra ler o valor dela e decidir se a Home aparece com conteúdo ou não. Por isso, a gente já pergunta se o `googleToken` tem valor, e se tiver, mostra algumas informações. Se não, avisa que tem que logar primeiro."

### Pendência

Essa dependência que a gente usou, o `react-google-login`, não satisfaz o padrão obrigatório de Typescript do projeto, resultando em erro se tentar compilar no projeto real (causado por um `type: any` de uma função interna, instalada na hora). Por isso, no momento há três opções:

- Encontrar outra dependência, que cumpra com o critério do projeto. (improvável)
- Fazer na mão um arquivo mais extenso que não esconda esses handlings e se baseie só na documentação da Google Auth. (provável e demorado)
- Encontrar uma forma de fazer override da parte que quebra no TS, se possível. (improvável)
