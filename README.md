# Proyecto NestJS con Swagger y Docker

Este proyecto es una aplicación backend construida con [NestJS](https://nestjs.com/). Utiliza Swagger para la documentación de la API y Docker para la contenedorización.

## Requisitos previos

- Node.js (>=22.x)
- Docker y Docker Compose

## Instalación

1. Clona el repositorio:

```bash
$ git clone https://github.com/CrissRivas/back-ayudate.git
$ cd back-ayudate


## Instala las dependencias:

$ npm install
```

## Ejecución de la aplicación
Desarrollo
Para ejecutar la aplicación en modo desarrollo:

```bash
# development
$ npm run start
```

Para ejecutar la aplicación en modo observación (watch mode):
```bash
# watch mode
$ npm run start:dev
```
Producción
Para ejecutar la aplicación en modo producción:

```bash
# production mode
$ npm run build

$ npm run start:prod
```




## Docker
### Desarrollo
Para montar la aplicación en un contenedor Docker en modo desarrollo:
```bash
# Mount on dev
$ sudo docker-compose -f docker-compose.yml up --build
```
### Producción
Para montar la aplicación en un contenedor Docker en modo producción:

```bash
# Mount on prod
$ sudo docker-compose -f docker-compose.prod.yml up --build
```