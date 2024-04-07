const mongoose = require('mongoose')

module.exports = async () => {
	try {
		await mongoose.connect(process.env.DB)
		console.log('DB was connected succsessfully')
	} catch (error) {
		console.log('couldnt connect')
	}
}
