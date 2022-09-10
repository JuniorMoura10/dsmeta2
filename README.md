# Reedição do app DSMeta
## Refazendo este projeto que usa ReactJS no front e Spring Boot no backend. Neste primeiro momento, criei o frontend estático com ReactJS, criando componentes e usando o React Hook useSate. Usei também o componente Datepicker para exibir um calendário nos campos de datas, além da criação do HTML com estilização em CSS. 

## Trabalhei o backend com o Spring Boot, usando o modelo de 3 camadas, onde o Service chama o Repository e o Controller chama o Service. Fiz a implantação de classes e interfaces (JpaReposutory) para o funcionamento do aplicativo. Foi feito também o deploy no Heroku. Foi feito tambem a configuração de segurança, com a implantação da classe SecurityConfig. Configuração do application.properties para implementação do banco de dados (foi usado o H2, que é um banco de memória do Spring) e a integração com o Twilio, para o envio de SMS para o celular cadastrado. Esta segunda parte foi muito construtiva!!

## Na terceira parte, foi feita a integração entre o frontend e o backend, usei modelos e foi feito o deploy da aplicação pronta no Netlify. Em todo o projeto, usei o Git e o GitHub para versionamento do código em um monorepo. Usei o componente React "Toast" para que o site notifique o envio da mensagem para o celular.

##Link para o deploy no Netlify: https://dsmeta2-juniormoura.netlify.app/

