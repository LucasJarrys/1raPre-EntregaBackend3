import PetModel from "./models/Pet.js";

export default class Pets {
  get = (params) => {
    return PetModel.find(params);
  };

  getBy = (params) => {
    return PetModel.findOne(params);
  };

  save = (doc) => {
    return PetModel.create(doc);
  };

  update = (id, doc) => {
    return PetModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
  };

  delete = (id) => {
    return PetModel.findByIdAndDelete(id);
  };

  saveMany = (docs) => {
    return PetModel.insertMany(docs);
  };
}
// import petModel from "./models/Pet.js";

// export default class Pet {

//     get = (params) =>{
//         return petModel.find(params)
//     }

//     getBy = (params) =>{
//         return petModel.findOne(params);
//     }

//     save = (doc) =>{
//         return petModel.create(doc);
//     }

//     saveMany = (docs) =>{
//         return petModel.insertMany(docs);
//     }

//     update = (id,doc) =>{
//         return petModel.findByIdAndUpdate(id,{$set:doc}, {new: true});
//     }

//     delete = (id) =>{
//         return petModel.findByIdAndDelete(id);
//     }
// }