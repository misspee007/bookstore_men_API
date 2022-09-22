const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		max: [2022, "Year cannot be greater than 2022"],
		required: true,
	},
	isbn: {
		type: String,
		required: true,
    unique: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	updatedAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("books", bookSchema);
