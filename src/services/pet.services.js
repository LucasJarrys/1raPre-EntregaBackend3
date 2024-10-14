import Pet from "../dao/Pets.dao.js"

export class PetServices {
    constructor() {
      this.petDao = new Pet();
    }
    //MOSTRAMOS TODOS LAS MASCOTAS
    async getAll() {
      const pets = await this.petDao.get();
      return pets;
    }

    //BUSCAMOS POR ID
    async getById(id) {
      const pet = await this.petDao.getBy(id);
      if (!pet) throw customError.notFoundError(`Pet id ${id} not found`);
      return pet;
    }
  
    //FUNCION PARA CREAR
    async create(data) {
      const pet = await this.petDao.save(data);
      return pet;
    }

    //FUNCION PARA CREAR VARIOS
    async createMany(data) {
      const pets = await this.petDao.saveMany(data);
      return pets;
    }
  
    //ACTUALIZAR
    async update(id, data) {
      const pet = await this.petDao.update(id, data);
      return pet;
    }
    
    //BORRAR/REMOVER
    async remove(id) {
      await this.petDao.delete(id);
      return "ok";
    }
  }