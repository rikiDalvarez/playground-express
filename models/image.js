import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const imageSchema = Schema({
	file: String,
	user: { type: Schema.ObjectId, ref: 'User' }
});

export default mongoose.model('Image', imageSchema);