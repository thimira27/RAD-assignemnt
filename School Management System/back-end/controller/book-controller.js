import Book from '../model/book.js';
import User from '../model/puser.js';



// Save data of the user in database
export const addBook = async (request, response) => {
    const book = request.body;
    
    const newBook = new Book(book);
    try{
        await newBook.save();
        response.status(201).json(newBook);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get all users
export const getBooks = async (request, response) => {
    try{
        const books = await Book.find();
        response.status(200).json(books);
    }catch( error ){
        response.status(404).json({ message: "error message by us" })
    }
}

// Get a user by id
export const getBookById = async (request, response) => {
    try{
        const book = await Book.findById(request.params.id);
        response.status(200).json(book);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editBook = async (request, response) => {
    let book = request.body;

    const editBook = new Book(book);
    try{
        await Book.updateOne({_id: request.params.id}, editBook);
        response.status(201).json(editBook);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteBook = async (request, response) => {
    try{
        await Book.deleteOne({_id: request.params.id});
        response.status(201).json("Book deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
