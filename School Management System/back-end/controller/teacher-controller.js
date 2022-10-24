import Teacher from '../model/teacher.js';


// Save data of the teacher in database
export const addTeacher = async (request, response) => {
    const teacher = request.body;
    
    const newTeacher = new Teacher(teacher);
    try{
        await newTeacher.save();
        response.status(201).json(newTeacher);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get all Teachers
export const getTeachers = async (request, response) => {
    try{
        const teachers = await Teacher.find();
        response.status(200).json(teachers);
    }catch( error ){
        response.status(404).json({ message: "error message by us" })
    }
}

// Get a teacher by id
export const getTeacherById = async (request, response) => {
    try{
        const teacher = await Teacher.findById(request.params.id);
        response.status(200).json(teacher);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited teacher in the database
export const editTeacher = async (request, response) => {
    let teacher = request.body;
    
    const editTeacher = new Teacher(teacher);
    
    try{
        await Teacher.updateOne({_id: request.params.id}, editTeacher);
        response.status(201).json(editTeacher);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of teacher from the database
export const deleteTeacher = async (request, response) => {
    try{
        await Teacher.deleteOne({_id: request.params.id});
        response.status(201).json("Teacher deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
