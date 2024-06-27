
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker

```bash
# Mount on dev
$ sudo docker-compose -f docker-compose.yml up --build

# Mount on prod
$ sudo docker-compose -f docker-compose.prod.yml up --build

