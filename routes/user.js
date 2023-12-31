import express from "express"

const api = express.Router()
import { uploadImage, getImageFileFromUser, getImage, deleteImage } from "../controllers/image.js"
import { test, saveUser, getUser, getAllUsers, updateUser, deleteUser } from "../controllers/user.js"
import multiparty from "connect-multiparty"

//middleware
const md_upload = multiparty({ uploadDir: "./uploads/users" })

api.get("/", test)
api.post("/register", saveUser)
api.post("/getuser", getUser)
api.get("/users", getAllUsers)
api.put("/update/:id", updateUser)
api.delete("/delete/:id", deleteUser)
api.post("/upload-image-user/:id", [md_upload], uploadImage)
api.get("/get-image-user/:id", [md_upload], getImageFileFromUser)
api.get("/get-image/:imageFile", getImage)
api.delete("/delete-image/:id", deleteImage)



export default api;
