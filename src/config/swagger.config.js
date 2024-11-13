import swaggerJSDoc from "swagger-jsdoc";

//configuramos swagger

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Documentación API Adopciones",
            version: "1.0.0",
            description: "API de Adopciones"
        }
    },
    apis:["./src/docs/**/*.yaml"]
}

export const specs = swaggerJSDoc(swaggerOptions);
