import { UserServices } from "../services/user.services.js";
import User from "../dao/models/User.js";


export class UserControllers {
  constructor() {
    this.userServices = new UserServices();
  }

  createUserMock = async (req, res) => {
    const users = await this.userServices.createMocks();
    res.status(201).json({ status: "success", users });
  };

  //TRAER TODOS LOS USUARIOS
  getAllUsers = async (req, res) => {
    try {
      const users = await this.userServices.getAll();
      res.send({ status: "success", payload: users });
    } catch (error) {
      console.error("Error getting users:", error);
      res.status(500).json({ status: "error", error: error.message });
    }
  };
  

  //OBTENER UN USUARIO
  getUser = async (req, res, next) => {
    try {
      const userId = req.params.uid;
      const users = await this.userServices.getById(userId);
      res.send({ status: "success", payload: users });
    } catch (error) {
      console.log(`Error: ${error.message}`);
      next(error);
    }
  };

  //CREAR UN USUARIO
  createUser = async (req, res) => {
    try {
      const newUser = await this.userServices.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ status: "error", message: error.message });
    }
  };

  //ACTUALIZAMOS UN USUARIO
  updateUser = async (req, res) => {
    try {
      const { uid } = req.params; 
      const userData = req.body;
      const updatedUser = await User.findByIdAndUpdate(uid, userData, { //ACTULIZAMOS EL USUARIO
        new: true,
      });

      if (!updatedUser) {
        return res.status(404).json({ status: "error", message: "User not found" });
      }

      return res.status(200).json({ status: "success", payload: updatedUser });

    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
  };

  //ELIMINAMOS UN USUARIO
  deleteUser = async (req, res) => {
    try {
      const userId = req.params.uid;
      const result = await this.userServices.remove(userId);
      if (!result)
        return res
          .status(404)
          .send({ status: "error", message: "User not found" });
      res.send({ status: "success", message: "User deleted" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).send({
        status: "error",
        message: "Error deleting user",
        error: error.message,
      });
    }
  };
}

