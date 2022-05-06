# Para criar um arquivo packge.json.
- yarn init
 ou
- npm init

# Instalando typescrip no projeto.
  - yarn add --dev typescript 
  - yarn add --dev @types/node
  ou
  - npm install typescript -D
  - npm install @types/node -D


# Instalando ts-node no projeto.
 - yarn add --dev ts-node-dev
 - yarn add --dev @types/ts-node-dev
 - ou
 - npm install ts-node-dev -D
 - npm instal @types/ts-node-dev -D

  1° Após o ts-node estiver instalado vamos adicionar ao nosso arquivo package.json dentro dos scripts o codigo
  
  "scripts":{
    "dev": "ts-node-dev src/app.ts "
  },


  # Instalando express no projeto
   - yarn add express --save
   - yarn add --dev @types/express
   - ou
   - npm install express
   - npm instal @types/express -D

  # Instalando dotenv no projeto
    yarn add dotenv --save


  # Instalando prisma.io no projeto
    - yarn add --dev prisma
    - yarn add @prisma/client
    -ou
    - npm install prisma -D
    - npm install @prisma/client
  
    1° Com prisma instalando em nosso projeto iremos iniciar o arquivo de configuração digitar o comando.
      - yarn prisma init
      - npx prisma init
  
    2° Ele criou automaticamente pra você um arquivo .env ou se o arquivo estiver criado ele adicionar 
      variavel de ambiemte para a conexão com banco de daods. Por fim na raiz do projeto o prisma cria 
      uma pasta com um arquivo chamado scheme.prima cara respónsavel por fazer a conexão com o banco 
      de dados que você escolher.
    
    3° com seu modelo criado no prisma vamos roda-la pra fazer a criação da nossa tabela no banco
       de dados digitando no terminal o seguinte comando.
       - npx prisma migrate dev -> dev por que estou em modo de desenvolvimento
         ° ele pergunta qual nome você quer criar para sua migration
         ° create users

  # SOLID
  1°  Single Responsibility Principle
  2°  Open/Closed Principle
  3°  Liskov Substitution Principle
  4°  Interface Segregation Principle
  5°  Dependency Inversion Principle


  1 -> Cada classe tem uma responsabilidade única;
  2 -> As classes da aplicação devem ser abertas para extensão mas fechadas para modificações;
  3 -> Nós devemos poder substituir uma clase pai por uma herança dela e tudo continuar funcionando;
  4 -> ...
  5 -> ...


  # JEST 
    - yarn add --dev jest
    - yarn add --dev @types/jest
    - yarn jest --init
    - yarn add --dev ts-node

  Após instalar o jest e roda o comando yarn jest --init ele irá fazer umas seriés de perguntas segue abaixo:

  1° Would you like to use Jest when running "test" script in "package.json"? yes
    - Você gostaria de usar o Jest ao executar o script "test" em "package.json"? sim
  
  2°  Would you like to use Typescript for the configuration file? yes
    - Você gostaria de usar o Typescript para o arquivo de configuração? sim
  
  3°  Choose the test environment that will be used for testing
    - Escolha o ambiente de teste que será usado para teste? node 

  4° Do you want Jest to add coverage reports? yes
    - Deseja que o Jest adicione relatórios de cobertura? sim
  
  5°  Which provider should be used to instrument code for coverage? v8
    - Qual provedor deve ser usado para instrumentar o código para cobertura? v8

  6° Automatically clear mock calls, instances, contexts and results before every test? yes
    - Limpar automaticamente chamadas simuladas, instâncias, contextos e resultados antes de cada teste? sim
  
# SWC
  - yarn add --dev jest @swc/jest @swc/core
  - npm install -D jest @swc/jest
