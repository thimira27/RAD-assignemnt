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
/*
// Get all users
export const getStudents = async (request, response) => {
    try{
        const students = await Student.find();
        response.status(200).json(students);
    }catch( error ){
        response.status(404).json({ message: "error message by us" })
    }
}
/*
// Get a user by id
export const getUserById = async (request, response) => {
    try{
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteStudent = async (request, response) => {
    try{
        await Student.deleteOne({_id: request.params.id});
        response.status(201).json("Student deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
*/