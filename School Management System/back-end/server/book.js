import express from 'express';
import { addBook, deleteBook, getBooks, editBook, getBookById } from '../controller/book-controller.js';


const router = express.Router();

//router.get('/', getStudents);
router.get('/books', getBooks);
router.post('/addBook', addBook);
router.delete('/:id', deleteBook);
router.put('/:id', editBook);
router.get('/books/:id', getBookById);

export default router;