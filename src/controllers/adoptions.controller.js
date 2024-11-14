import mongoose from "mongoose";
import { AdoptionModel } from "../dao/models/Adoption.js";
import Pet from "../dao/models/Pet.js";
import UserModel from "../dao/models/User.js";

export class AdoptionsController {
  async getAllAdoptions(req, res) {
    try {
      const adoptions = await AdoptionModel.find()
        .populate("user")
        .populate("pet");
      res.json({ status: "success", adoptions });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", error: error.message });
    }
  }

  async getAdoption(req, res) {
    try {
      const { aid } = req.params;

      // Validar si el ID tiene el formato correcto de un ObjectId de MongoDB
    if (!aid.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        status: "error",
        error: "Invalid Adoption ID"
      });
    }
    //BUSCAR LA ADOPCION POR ID
      const adoption = await AdoptionModel.findById(aid)
        .populate("user")
        .populate("pet");
    //SI NO ENCUENTRA LA ADOPCION DEVUELVE UN 404
      if (!adoption) {
        return res
          .status(404)
          .json({ status: "error", message: "Adoption not found" });
      }
      //RESPONDER CON LA ADOPCION ENCONTRADA
      res.json({ status: "success", adoption });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", error: error.message });
    }
  }

  async createAdoption(req, res) {
    try {
      const { uid, pid } = req.params;

      const userObjectId = mongoose.Types.ObjectId(uid);
      const petObjectId = mongoose.Types.ObjectId(pid);

      
      //VERIFICAMOS QUE EL USER EXISTA
      const userExists = await UserModel.findById(userObjectId);
      if (!userExists) {
        return res
          .status(404)
          .json({ status: "error", message: "User not found" });
      }

      // VERIFICAMOS QUE LA MASCOTA EXISTA
      const petExists = await Pet.findById(petObjectId);
      if (!petExists) {
        return res
          .status(404)
          .json({ status: "error", message: "Pet not found" });
      }

      const existingAdoption = await AdoptionModel.findOne({
        user: userObjectId,
        pet: petObjectId,
      });

      if (existingAdoption) {
        return res
          .status(400)
          .json({ status: "error", message: "Adoption already exists" });
      }

      const newAdoption = new AdoptionModel({
        user: userObjectId,
        pet: petObjectId,
        adoptionDate: new Date(),
      });

      await newAdoption.save();

      // OBTENER LA ADOPCION CREADA
      const savedAdoption = await AdoptionModel.findById(newAdoption._id)
        .populate("user")
        .populate("pet");

      res.status(201).json({ status: "success", adoption: savedAdoption });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", error: error.message });
    }
  }

  async deleteAdoption(req, res) {
    try {
      const { aid } = req.params;
      const result = await AdoptionModel.findByIdAndDelete(aid);

      if (!result) {
        return res.status(404).json({ message: "Adopción no encontrada" });
      }

      res.status(200).json({ message: result });
    } catch (error) {
      res.status(500).json({
        message: "Error al eliminar la adopción",
        error: error.message,
      });
    }
  }
}


// ADOPTION DEL PROFE
// // import { adoptionsService, petsService } from "../services/index.js"
// import { UserServices } from "../services/user.services.js";

// import { AdoptionServices } from "../services/adoption.services.js";

// //MEJOR UTILIZAMOS CLASES
// export class AdoptionsController {
//   constructor() {
//     this.adoptionsService = new AdoptionServices();
//     this.usersService = new UserServices();
//   }

//   getAllAdoptions = async (req, res, next) => {
//     try {
//       const result = await this.adoptionsService.getAll();
//       res.send({ status: "success", payload: result });
//     } catch (error) {
//       next(error);
//     }
//   };

//   getAdoption = async (req, res, next) => {
//     try {
//       const adoptionId = req.params.aid;
//       const adoption = await this.adoptionsService.getById(adoptionId);
//       if (!adoption) return res.status(404).send({ status: "error", error: "Adoption not found" });
//       res.send({ status: "success", payload: adoption });
//     } catch (error) {
//       next(error);
//     }
//   };

//   createAdoption = async (req, res, next) => {
//     try {
//       const { uid, pid } = req.params;
//       const user = await usersService.getUserById(uid);
//       if (!user) return res.status(404).send({ status: "error", error: "user Not found" });
//       const pet = await petsService.getBy({ _id: pid });
//       if (!pet) return res.status(404).send({ status: "error", error: "Pet not found" });
//       if (pet.adopted) return res.status(400).send({ status: "error", error: "Pet is already adopted" });
//       user.pets.push(pet._id);
//       await usersService.update(user._id, { pets: user.pets });
//       await petsService.update(pet._id, { adopted: true, owner: user._id });
//       await adoptionsService.create({ owner: user._id, pet: pet._id });
//       res.send({ status: "success", message: "Pet adopted" });
//     } catch (error) {
//       next(error);
//     }
//   };
// }



//COMENTAMOS PORQUE NOS VAMOS A UTILIZARLO

// const usersService = new UserServices();
// const getAllAdoptions = async(req,res)=>{
//     const result = await adoptionsService.getAll();
//     res.send({status:"success",payload:result})
// }

// const getAdoption = async(req,res)=>{
//     const adoptionId = req.params.aid;
//     const adoption = await adoptionsService.getBy({_id:adoptionId})
//     if(!adoption) return res.status(404).send({status:"error",error:"Adoption not found"})
//     res.send({status:"success",payload:adoption})
// }

// const createAdoption = async(req,res)=>{
//     const {uid,pid} = req.params;
//     const user = await usersService.getUserById(uid);
//     if(!user) return res.status(404).send({status:"error", error:"user Not found"});
//     const pet = await petsService.getBy({_id:pid});
//     if(!pet) return res.status(404).send({status:"error",error:"Pet not found"});
//     if(pet.adopted) return res.status(400).send({status:"error",error:"Pet is already adopted"});
//     user.pets.push(pet._id);
//     await usersService.update(user._id,{pets:user.pets})
//     await petsService.update(pet._id,{adopted:true,owner:user._id})
//     await adoptionsService.create({owner:user._id,pet:pet._id})
//     res.send({status:"success",message:"Pet adopted"})
// }

// export default {
//     createAdoption,
//     getAllAdoptions,
//     getAdoption
// }