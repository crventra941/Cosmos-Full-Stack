# CosmoApolloSever Node.js TypeScript

Node.js Version

`v20.5.0`
## Setup Production mode environment
### The application and DB will run together with docker-compose

1. Make sure, you have the `.env.prod` with the environment variables

Copy `env-template` file, to setting up environment variables

```bash
$ cp env-template .env
```

2. Run the docker-compose command (Can take some minutes, so relax):

```bash
$ docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

```
3. Finally you will see the next message:

```bash
🚀 Server listening at: 3000
```

4. You can access to playground through: `http://localhost:3000/cosmos`

Feel free to improve the code and your feedbak is welcome!!

Thanks!!

crventra94@gmail.com



## Setup Local Development environment

1. Install dependencies
```bash
$ npm install
```
2. Copy `env-template` file, to setting up environment variables

```bash
$ cp env-template .env
```
3. Setup MongoDB Database via docker-compose using a local volume

```bash
$ docker-compose up -d
```
4. Run GraphQL server

```bash
$ npm run start
```

5. Finally you will see the next message:

```bash
🚀 Server listening at: 3000
```

6. You can access to playground through: `http://localhost:3000/cosmos`

Feel free to change the `PORT` number in your `.env` file
