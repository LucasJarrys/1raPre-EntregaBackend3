import Users from "../dao/Users.dao.js";
import { customError } from "../errors/custom.error.js";
import { generateUsersMock } from "../mocks/user.mock.js";

 
export class UserServices {
    constructor() {
      // this.userRepository = new UserRepository(new Users());

      //VAMOS A HACER QUE EL SERVICIO LLAME DIRECTAMENTE AL DAO
      this.userDao = new Users();
    }

    //FUNCION PARA MOSTRAR TODOS LOS USUARIOS
    async getAll() {
      const users = await this.userDao.get();
      return users;
    }

    //BUSCAMO USUARIOS POR ID
    async getById(id) {
      const user = await this.userDao.getBy(id);
      if(!user) throw customError.notFoundError(`User id ${id} not found`);
      return user;
    }

    //CREAR USUARIOS
    async create(data) {
      const user = await this.userDao.save(data);
      return user;
    }

    //FUNCION PARA CREAR MUCHOS USUARIOS
    async createMany(data) {
      const users = await this.userDao.saveMany(data)
      return users;
    }

    //ACTUALIZAMOS
    async update(id, data) {
      const user = await this.userDao.update(id, data);
      return user;
    }

    //BORRAR/REMOVER
    async remove(id) {
      await this.userDao.delete(id);
      return "ok";
    }

    //GENERAMOS 10 USUARIOS AL AZAR
    async createMocks() {
      const users = generateUsersMock(10);
      const usersDb = await this.userDao.saveMany(users);
      return usersDb;
    };
  };