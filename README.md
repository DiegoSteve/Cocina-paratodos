# API RESTful con Node.js

Proyecto de demostración para clases de desarrollo de APIs utilizando Node.js,
con implementación en contenedores de Docker.

## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   https://github.com/DiegoSteve/Cocina-paratodos
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd Cocina-paratodos
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3100`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)

## Descripcion del Proyecto

El proyecto consiste en desarrollar una aplicación web o sitio web que atienda las necesidades de dos tipos de usuarios: el usuario común y el usuario vendedor. El usuario común puede registrarse, explorar el sitio y acceder a servicios. Por otro lado, el usuario vendedor también puede registrarse como usuario común, pero tiene la capacidad adicional de ofrecer sus productos a la venta.

La motivación detrás de este proyecto es abordar la problemática de aquellas personas que se quedan en casa, especialmente amas de casa, que buscan generar ingresos mediante la venta de alimentos caseros. Estos vendedores podrían dar de alta comidas sencillas y económicas en la plataforma.

La audiencia principal son jóvenes estudiantes, incluyendo estudiantes foráneos, que pueden explorar la aplicación para encontrar vendedores cercanos mediante la geolocalización. Esto les permitiría adquirir comidas a precios razonables, al tiempo que apoyan a las mujeres que se quedan en casa al proporcionarles una fuente de ingresos.

En resumen, el proyecto busca crear una plataforma que conecte a vendedores de alimentos caseros con consumidores, facilitando transacciones locales, promoviendo la economía entre la comunidad y ofreciendo una opción conveniente para aquellos que desean adquirir comidas caseras a precios accesibles.