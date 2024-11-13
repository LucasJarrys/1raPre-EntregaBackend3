// import userModel from "./models/User.js";

// export default class Users {
//   get = async (params) => {
//     try {
//       return await userModel.find(params);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       throw new Error("Error fetching users");
//     }
//   };

//   getById = (id) => {
//     return userModel.findById(id);
//   };

//   getByEmail = (email) => {
//     return userModel.findOne({ email });
//   };

//   save = (doc) => {
//     return userModel.create(doc);
//   };

//   saveMany(users) {
//     return userModel.insertMany(users);
//   }
//   update = (id, doc) => {
//     return userModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
//   };

//   delete = (id) => {
//     return userModel.findByIdAndDelete(id);
//   };
// }
import userModel from "./models/User.js";


export default class User {
    
    get = async (params) => {
      try {
        return await userModel.find(params);
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Error fetching users");
      }
    };

    getById = (id) =>{
        return userModel.findById(id);
    }

    getByEmail = (email) => {
        return userModel.findOne({ email });
      };

    save = (doc) =>{
        return userModel.create(doc);
    }

    //FUNCION PARA GUARDAR VARIOS
    saveMany = (docs) =>{
        return userModel.insertMany(docs);
    }

    update = (id,doc) =>{
        return userModel.findByIdAndUpdate(id,{$set:doc}, { new: true });
    }

    delete = (id) =>{
        return userModel.findByIdAndDelete(id);
    }
}