const express = require("express");
const { connectToMongoDB } = require("./db");
const bookRoute = require("./routes/book");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

//  Connecting to MongoDB instance
connectToMongoDB();

// express body parser
app.use(express.json());

app.use("/books", bookRoute);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
