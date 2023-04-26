var Book = require('../models/books');

exports.create = async (req, res) => {
    const book = new Book();
    book.title = req.body.title;
    book.author = req.body.author;
    book.category = req.body.category;
    try {
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.findAll = async (req, res) => {
    try {
        const books = await Book.find();
        res.send(books);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.findOne = async (req, res) => {
    console.log("getting one book");
    try {
        const id = req.params.id;
        const book = await Book.findById(id).exec();
        res.send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        let book = await Book.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
            },
            { new: true }
        );

        if (!book) return res.status(404).send("book Id not found");
        res.send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndRemove(id);
        if (!book) return res.status(404).send("book with the given id not found");
        res.send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
