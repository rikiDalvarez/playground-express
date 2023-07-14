import mongoose from 'mongoose';
import 'dotenv/config'
import app from './app.js';


const port = 3000

try {
	mongoose.connect(process.env.DB, { useNewUrlParser: true })
	console.log("db connected 🐲")
	app.listen(port, () => {
		console.log(`server initiated 🐲 at at http://localhost:${port}`)
	})
} catch (error) {
	console.log(error)
}




