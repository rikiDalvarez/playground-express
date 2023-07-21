import User from '../models/user.js';
import Image from '../models/image.js';
import fs from 'fs';
import path from 'path';

async function uploadImage(req, res) {
	const image = new Image();
	const userId = req.params.id;
	const fileName = "No ha pujat cap imatge...";

	try {
		if (req.files) {
			const filePath = req.files.image.path;
			const fileSplit = filePath.split("/");
			const fileName = fileSplit[2];

			image.file = fileName;
			image.user = userId;

			const extSplit = fileName.split(".");
			const fileExt = extSplit[1].toLowerCase();

			if (fileExt === "png" || fileExt === "jpg" || fileExt === "jpeg" || fileExt === "gif") {
				const imageSaved = await image.save();
				res.status(200).send({ image: imageSaved });
			}
		}
	} catch (error) {
		console.log(error)
	}
}

async function getImageFileFromUser(req, res) {
	const userId = req.params.id;

	try {
		const foundImage = await Image.find({ user: userId })
		console.log(foundImage)
		res.send(foundImage)

	} catch (error) {
		console.log(error)
	}
}

async function getImage(req, res) {
	const imageFile = req.params.imageFile;
	const pathFile = `./uploads/users/${imageFile}.jpeg`;

	try {
		if (fs.existsSync(pathFile)) {
			await res.sendFile(path.resolve(pathFile))
		}
	} catch (error) {
		console.log(error)
	}
}

async function deleteImage(req, res) {
	const imageId = req.params.id;

	try {
		const deletedImage = await Image.findByIdAndRemove(imageId)
		res.send(deletedImage)
	} catch (error) {
		console.log(error)
	}
}

export { uploadImage, getImageFileFromUser, getImage, deleteImage }