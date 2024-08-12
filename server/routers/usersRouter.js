import { Router } from "express";
import { addUsers, getUserById, getUsers, modifyUserData } from "../controllers/usersController.js";

// Set router
const userRouter = Router()

// Define Handlers
userRouter.get('/', getUsers)
userRouter.get('/findUser', getUserById)
userRouter.post('/addUser', addUsers)
userRouter.put('/modifyUserData', modifyUserData)


export default userRouter