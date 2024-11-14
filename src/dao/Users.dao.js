import userModel from "./models/User.js";

export default class Users {
  //OBTENEMOS USUARIO
  get = (params) => {
    return userModel.find({params});
  };

  //BUSCMAOS USUARIO POR ID
  getById = (id) => {
    return userModel.findById(id);
  };

  //POR EMAIL
  getByEmail = (email) => {
    return userModel.findOne({ email });
  };

  //GUARDAMOS
  save = (doc) => {
    return userModel.create(doc);
  };

  //GUARDAMOS MUCHOS
  saveMany = (docs) => {
    return userModel.insertMany(docs);
  };

  //ACTUALIZAR USUARIO
  update = (id, doc) => {
    return userModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
  };

  //BORRAR USUARIO
  delete = (id) => {
    return userModel.findByIdAndDelete(id);
  };
}