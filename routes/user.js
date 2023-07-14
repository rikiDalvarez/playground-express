import express from "express"

const api = express.Router()

api.get("/", (req, res) => {
	console.log("hello there get 🐲")
	res.send("get")
})
api.post("/post", (req, res) => {
	console.log("request received 🐲")
	res.send(req.body)
})
api.delete("/delete", (req, res) => {
	console.log("request received 🐲")
})
api.put("/put", (req, res) => {
	console.log("request received 🐲")
})

export default api;
