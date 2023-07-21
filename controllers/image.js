import User from '../models/user.js';
import Image from '../models/image.js';

async function uploadImage(req, res) {
	const userId = req.params.id;
	const fileName = "No ha pujat cap imatge...";

	try {
		if (req.files) {
			const filePath = req.files.image.path;
			const fileSplit = filePath.split("/");
			const fileName = fileSplit[2];

			console.log(fileSplit)

			console.log(filePath)
		}
	} catch (error) {
		console.log(error)
	}
}

export { uploadImage }