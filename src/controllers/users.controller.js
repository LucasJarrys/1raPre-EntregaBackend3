import { customError } from "../errors/custom.error.js";
import { UserServices } from "../services/user.services.js";

export class UserControllers {
  constructor() {
    this.userServices = new UserServices();
  }

  createUserMock = async (req, res) => {
    const users = await this.userServices.createMocks();
    res.status(201).json({ status: "success", users });
  };

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userServices.getAll();
      res.send({ status: "success", payload: users });
    } catch (error) {
      console.error("Error getting users:", error);
      res.status(500).json({ status: "error", error: error.message });
    }
  };

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

  createUser = async (req, res) => {
    try {
      const newUser = await this.userServices.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ status: "error", message: error.message });
    }
  };

  updateUser = async (req, res) => {
    try {
      const updateBody = req.body;
      const userId = req.params.uid;
      const user = await this.userServices.getById(userId);
      if (!user)
        return res
          .status(404)
          .send({ status: "error", message: "User not found" });
      const result = await this.userServices.update(userId, updateBody);
      res.send({ status: "success", message: "User updated" });
    } catch (error) {
      res
        .status(500)
        .send({ status: "error", message: "Error updating user", error });
    }
  };

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
      res
        .status(500)
        .send({
          status: "error",
          message: "Error deleting user",
          error: error.message,
        });
    }
  };
}
// import { generateUsersMock } from "../mocks/user.mock.js";
// import { UserServices } from "../services/user.services.js ";


// export class UserControllers {
//     constructor() {
//       this.userServices = new UserServices();
//     }
  
//     createUserMock = async (req, res) => {
//       const users = await this.userServices.createMocks();

//     res.status(201).json({ status: "ok", users });
//     };
  
//     getAllUsers = async (req, res, next) => {
//       try {
//         const users = await this.userServices.getAll();
//         throw new Error("Nuestro error");
//         res.send({ status: "success", payload: users });

//       } catch (error) {
//         next(error);
//       }
//     };
  
//     getUser = async (req, res, next) => {
//       try {
//         const userId = req.params.uid;
  
//         const user = await this.userServices.getById(userId);
  
//         res.send({ status: "success", payload: user });
//       } catch (error) {
//         console.log(`Error: ${error.message}`);
//         next(error);
//       }
//     };
  
//     updateUser = async (req, res) => {
//       const updateBody = req.body;
//       const userId = req.params.uid;
//       const user = await this.userServices.getById(userId);
//       if (!user)
//         return res.status(404).send({ status: "error", error: "User not found" });
  
//       const result = await this.userServices.update(userId, updateBody);
//       res.send({ status: "success", message: "User updated" });
//     };
  
//     deleteUser = async (req, res) => {
//       const userId = req.params.uid;
//       const result = await this.userServices.remove(userId);
//       res.send({ status: "success", message: "User deleted" });
//     };
//   }