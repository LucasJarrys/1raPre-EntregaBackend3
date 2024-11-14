import Adoptions from "../dao/Adoptions.dao.js";
import { generateAdoptionsMock } from "../mocks/adoption.mock.js";

export class AdoptionServices {
  constructor() {
    this.adoptionDao = new Adoptions();
  }

  //OBTENER TODAS LAS ADOPCIONES
  async getAll() {
    return await this.adoptionDao.get();
  }

  //OBTENER ADOPCION POR ID
  async getById(id) {
    return await this.adoptionDao.getBy({ _id: id });
  }

  //CREAR ADOPCION
  async create(data) {
    return await this.adoptionDao.save(data);
  }

  //ACTUALIZAR ADOPCION
  async update(id, data) {
    return await this.adoptionDao.update(id, data);
  }

  //BORRAR|ELIMINAR ADOPCION
  async delete(id) {
    await this.adoptionDao.delete(id);
    return "Adoption Deleted";
  }

  async createMocks() {
    const adoptions = generateAdoptionsMock(10);
    return await this.adoptionDao.saveMany(adoptions);
  }
}