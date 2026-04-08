import Book from "../models/Book.js";

// Create Book
export const createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
};

// Get All Books
export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Get Single Book
export const getBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
};

// Update Book
export const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(book);
};

// Delete Book
export const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};