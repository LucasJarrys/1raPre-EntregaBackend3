import Pets from "../dao/Pets.dao.js";
import { generatePetsMock } from "../mocks/pets.mock.js";

export class PetServices {
  constructor() {
    this.petDao = new Pets();
  }

  //OBTENER TODAS LAS MASCOTAS
  async getAll() {
    const pets = await this.petDao.get();
    return pets;
  }

  //OBTENRR MAASCOTA POR ID 
  async getById(id) {
    const pet = await this.petDao.getBy(id);
    return pet;
  }

  //CREAR MASCOTA
  async create(data) {
    const pet = await this.petDao.save(data);
    return pet;
  }

  //CREAR MUCHAS MASCOTAS
  async createMany(data) {
    const pets = await this.petDao.saveMany(data);

    return pets;
  }

  //ACTUALIZAR MASCOTA
  async update(id, data) {
    const pet = await this.petDao.update(id, data);
    return pet;
  }

  //BORRAR MASCOTA
  async delete(id) {
    const deletedPet = await this.petDao.delete(id);
    if (!deletedPet) {
      throw new Error("No pet found with the given id.");
    }
    return "Pet Deleted";
  }

  
  async createMocks() {
    try {
      const pets = generatePetsMock(5);
      const petsDb = await this.petDao.saveMany(pets);
      return petsDb;
    } catch (error) {
      console.error("Error in createMocks:", error);
      throw new Error("Error creating mock pets");
    }
  }
}

// import Pet from "../dao/Pets.dao.js"

// export class PetServices {
//     constructor() {
//       this.petDao = new Pet();
//     }
//     //MOSTRAMOS TODOS LAS MASCOTAS
//     async getAll() {
//       const pets = await this.petDao.get();
//       return pets;
//     }

//     //BUSCAMOS POR ID
//     async getById(id) {
//       const pet = await this.petDao.getBy(id);
//       if (!pet) throw customError.notFoundError(`Pet id ${id} not found`);
//       return pet;
//     }
  
//     //FUNCION PARA CREAR
//     async create(data) {
//       const pet = await this.petDao.save(data);
//       return pet;
//     }

//     //FUNCION PARA CREAR VARIOS
//     async createMany(data) {
//       const pets = await this.petDao.saveMany(data);
//       return pets;
//     }
  
//     //ACTUALIZAR
//     async update(id, data) {
//       const pet = await this.petDao.update(id, data);
//       return pet;
//     }
    
//     //BORRAR/REMOVER
//     async remove(id) {
//       await this.petDao.delete(id);
//       return "ok";
//     }
//   }