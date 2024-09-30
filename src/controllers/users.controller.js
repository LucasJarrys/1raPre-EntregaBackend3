import { generateUsersMock } from "../mocks/user.mock.js";
import { UserServices } from "../services/user.services.js ";


export class UserControllers {
    constructor() {
      this.userServices = new UserServices();
    }
  
    createUserMock = async (req, res) => {
      const users = await this.userServices.createMocks();

    res.status(201).json({ status: "ok", users });
    };
  
    getAllUsers = async (req, res) => {
      const users = await this.userServices.getAll();
      console.log(users);
      res.send({ status: "success", payload: users });
    };
  
    getUser = async (req, res) => {
      const userId = req.params.uid;
      const user = await this.userServices.getById(userId);
      if (!user)
        return res.status(404).send({ status: "error", error: "User not found" });
      res.send({ status: "success", payload: user });
    };
  
    updateUser = async (req, res) => {
      const updateBody = req.body;
      const userId = req.params.uid;
      const user = await this.userServices.getById(userId);
      if (!user)
        return res.status(404).send({ status: "error", error: "User not found" });
  
      const result = await this.userServices.update(userId, updateBody);
      res.send({ status: "success", message: "User updated" });
    };
  
    deleteUser = async (req, res) => {
      const userId = req.params.uid;
      const result = await this.userServices.remove(userId);
      res.send({ status: "success", message: "User deleted" });
    };
  }