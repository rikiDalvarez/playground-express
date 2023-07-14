import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const imageSchema = Schema({
	file: String,
	usuari: { type: Schema.ObjectId, ref: 'User' }
});

export default mongoose.model('Image', imageSchema);