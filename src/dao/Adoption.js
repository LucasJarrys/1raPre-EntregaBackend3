import adoptionModel from "./models/Adoption.js";

export default class Adoption {
  //BUSCAMOS LAS ADOPTION
    get = (params) => {
        return adoptionModel.find(params);
  
    };
 //OBTENEMOS POR ID
    getBy = (params) => {
        return adoptionModel.findOne(params);
    };
//GUARDAMOS
    save = (doc) => {
        return adoptionModel.create(doc);
    };
//ACTUALIZAMOS
    update = (id, doc) => {
        return adoptionModel.findByIdAndUpdate(id, { $set: doc });
    };
//ELIMINAMOS ADOPTION
    delete = (id) => {
        return adoptionModel.findByIdAndDelete(id);
    };
}