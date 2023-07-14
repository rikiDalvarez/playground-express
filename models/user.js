import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = Schema({
	name: String,
	surname: String,
	email: String,
	password: String,
});

export default mongoose.model("User", userSchema);