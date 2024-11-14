import petModel from "./models/Pet.js";

export default class Pet {
  //OBETENEMOS MASCOTAS
  get = (params) => {
    return petModel.find(params);
  };
  //BUSCAMOS POR ID
  getBy = (params) => {
    return petModel.findOne(params);
  };
  //GUARDAMOS
  save = (doc) => {
    return petModel.create(doc);
  };
  
  //ACTUALIZAMOS MASCOTA ENCONTRADA POR ID
  update = (id, doc) => {
    return petModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
  };

  //ELIMINAMOS
  delete = (id) => {
    return petModel.findByIdAndDelete(id);
  };

  //GUARDAMOS
  saveMany = (docs) => {
    return petModel.insertMany(docs);
  };
}