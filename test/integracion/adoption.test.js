// import { expect } from "chai";
// import supertest from "supertest";

// const request = supertest("http://localhost:8080/api/adoptions");  

// describe("Test de integración Adoptions", () => {
//   let testAdoption;

//   // Test de obtención de todas las adopciones
//   it("[GET] /api/adoptions - Debe devolver un array de adopciones", async () => {
//     const { status, body } = await request.get("/");  
//     expect(status).to.be.equal(200);  
//     // expect(body.payload).to.be.an("array");  
//   });

//   // Test de creación de adopción
//   it("[POST] /api/adoptions/:uid/:pid - Debe crear una nueva adopción", async () => {
//     const userId = "670d7d031bb032cdcd6cc807";  
//     const petId = "6716ad561b3f687d0b4cab89";   
//     const newAdoption = {
//       date: "2024-11-12", 
//       status: "pending",   
//     };

//     // Realizamos la solicitud POST para crear la adopción
//     const { status, body } = await request.post(`/${userId}/${petId}`).send(newAdoption);
//     testAdoption = body.payload;  

//     expect(status).to.be.equal(201);  
//     expect(body.payload).to.be.an("object");  
//     expect(body.payload.date).to.be.equal("2024-11-12");  
//     expect(body.payload.status).to.be.equal("pending");  
//     expect(body.payload.userId).to.be.equal(userId);  
//     expect(body.payload.petId).to.be.equal(petId);  
//   });

// });