Proyecto APP de Adopciones de Mascotas 

Es una API construida con Node.js, Express y MongoDB, diseñada para facilitar la gestión de usuarios, mascotas, adopciones y sesiones en un entorno Dockerizado. La aplicación proporciona un sistema completo para administrar todo el proceso de adopción de mascotas, incluyendo funcionalidades de autenticación de usuarios y generación de datos de prueba, todo documentado con Swagger.
Tecnologías y Herramientas Utilizadas

    Node.js: Entorno de ejecución para el backend de la aplicación.
    Express.js: Framework para el manejo de rutas HTTP y solicitudes.
    MongoDB: Base de datos NoSQL para almacenar la información.
    Mongoose: ODM para interactuar de manera eficiente con MongoDB.
    Swagger: Herramienta para documentar y visualizar los endpoints de la API.
    Docker: Contenedores para facilitar la configuración y el despliegue.
    Jest: Framework para realizar pruebas funcionales y de integración.
    Docker Compose: Para definir y ejecutar servicios de múltiples contenedores, incluyendo la aplicación, la base de datos MongoDB y herramientas adicionales como Portainer.

Gestión de Mascotas:

    Funcionalidades de CRUD para manejar información sobre las mascotas disponibles para adopción.

Otras Características:

    Autenticación de sesiones para la gestión de usuarios.
    Generación de datos de prueba para facilitar el desarrollo y las pruebas.
    Documentación interactiva de la API accesible a través de Swagger en /api-docs.

Instalación y Ejecución

  CLONA EL REPOSITORIO

Instala las dependencias:

npm install

Ejecuta el servidor:

    npm start

Configuración con Docker

Este proyecto está completamente Dockerizado para facilitar su despliegue en cualquier entorno.

    Construir la imagen Docker:

docker build -t ipets .

Ejecutar el contenedor:

docker run --name ipets-app -p 3000:8080 ipets

Subir la imagen a Docker Hub:
La imagen del proyecto está disponible en Docker Hub para su fácil descarga e instalación:

   https://hub.docker.com/repository/docker/lucasjarrys/adoption/general

Requisitos del Sistema

    Node.js v20 o superior.
    Docker y Docker Compose para el manejo de contenedores.

Despliegue con Docker Compose

Si deseas ejecutar la aplicación junto con MongoDB y otros servicios, puedes utilizar Docker Compose con el siguiente archivo docker-compose.yml:

version: '3'
services:
  app:
    image: ipets
    ports:
      - "3000:8080"
  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
  portainer:
    image: portainer/portainer-ce:latest
    ports:
      - "9000:9000"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock"

Documentación de la API

Toda la documentación de los endpoints está disponible en Swagger en la siguiente ruta:

    Ruta de documentación: /api-docs
