import Subject from '../model/subject.js';



// Save data of the user in database
export const addSubject = async (request, response) => {
    const subject = request.body;
    
    const newSubject = new Subject(subject);
    try{
        await newSubject.save();
        response.status(201).json(newSubject);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get all users
export const getSubject = async (request, response) => {
    try{
        const subject = await Subject.find();
        response.status(200).json(subject);
    }catch( error ){
        response.status(404).json({ message: "error message by us" })
    }
}

// Get a subject by id
export const getSubjectById = async (request, response) => {
    try{
        const subject = await Subject.findById(request.params.id);
        response.status(200).json(subject);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited subject in the database
export const editSubject = async (request, response) => {
    let subject = request.body;
    
    const editSubject = new Subject(subject);
    
    try{
        await Subject.updateOne({_id: request.params.id}, editSubject);
        response.status(201).json(editSubject);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of subject from the database
export const deleteSubject = async (request, response) => {
    try{
        await Subject.deleteOne({_id: request.params.id});
        response.status(201).json("Subject deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
