const express = require("express");
const bookSchema = require("../model/book");

const bookRoute = express.Router();

// CRUD operations

// READ
bookRoute.get("/", (req, res) => {
	// return all books
	bookSchema
		.find({})
		.then((books) => {
			res.status(200).send(books);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message);
		});
});

// READ by ID
bookRoute.get("/:id", (req, res) => {
	// find and return book by id
	const { id } = req.params;
	bookSchema
		.findById(id)
		.then((book) => {
			res.status(200).send(book);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message);
		});
});

// CREATE
bookRoute.post("/", (req, res) => {
	const book = req.body;

	// add book to db
	bookSchema
		.create(book)
		.then((book) => {
			res.status(201).send({
				message: "Book created successfully",
				data: book,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message);
		});
});

// UPDATE
bookRoute.put("/:id", (req, res) => {
	const { id } = req.params;
	const book = req.body;

	// update book in db
	bookSchema
		.findByIdAndUpdate(id, book, { new: true })
		.then((book) => {
			res.status(200).send({
				message: "Book updated successfully",
				data: book,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message);
		});
});

// DELETE
bookRoute.delete("/:id", (req, res) => {
	const { id } = req.params;

	// delete book from db
	bookSchema
		.findByIdAndDelete(id)
		.then(() => {
			res.status(200).send({
				message: "Book deleted successfully",
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message);
		});
});

module.exports = bookRoute;
