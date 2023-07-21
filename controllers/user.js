import User from '../models/user.js'

function test(req, res) {
	res.status(200).send({ message: "hello there get 🐲" })
}

async function saveUser(req, res) {

	const user = new User();
	const { name, surname, email, password } = req.body;

	user.name = name;
	user.surname = surname;
	user.email = email;
	user.password = password;

	if (user.name != null && user.surname != null && user.email != null &&
		user.password != null) {

		const newUser = await user.save();
		console.log(newUser)
		if (newUser.err) {
			res.status(500).send({ message: "Error al guardar l'usuari" });
		} else {
			res.status(200).send({ usuari: newUser });
		}
	} else {
		res.status(402).send({ message: "Indica totes les dades" });
	}
}

async function getUser(req, res) {
	const params = req.body;
	console.log(params.email)
	const email = params.email;

	const userFound = await User.findOne({ email: email })
	console.log(userFound)
	res.send(userFound)
}

async function getAllUsers(req, res) {
	const users = await User.find()
	res.send(users)
}

async function updateUser(req, res) {

	const userId = req.params.id;
	console.log(userId)
	const update = req.body;
	console.log(update)

	try {
		const userUpdated = await User.findByIdAndUpdate(userId, update);
		res.status(200).send({ user: userUpdated });
		console.log(userUpdated)

	} catch (error) {
		res.status(500).send({ message: "Error del servidor" });
	}
}

async function deleteUser(req, res) {
	const userId = req.params.id;

	try {
		const userDeleted = await User.findByIdAndDelete(userId);
		res.status(200).send({ user: userDeleted });
	} catch (error) {
		res.status(500).send({ message: "Error del servidor" });
	}
}


export { test, saveUser, getUser, getAllUsers, updateUser, deleteUser }