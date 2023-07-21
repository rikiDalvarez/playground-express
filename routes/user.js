import express from "express"

const api = express.Router()
import { test, saveUser, getUser, getAllUsers, updateUser, deleteUser } from "../controllers/user.js"

api.get("/", test)
api.post("/register", saveUser)
api.post("/getuser", getUser)
api.get("/users", getAllUsers)
api.put("/update/:id", updateUser)
api.delete("/delete/:id", deleteUser)



export default api;
