import LabItem from '../model/labitem.js';



export const addLabItem = async (request, response) => {
    const labitem = request.body;
    
    const newLabItem = new LabItem(labitem);
    try{
        await newLabItem.save();
        response.status(201).json(newLabItem);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


export const getLabItems = async (request, response) => {
    try{
        const Labitem = await LabItem.find();
        response.status(200).json(Labitem);
    }catch( error ){
        response.status(404).json({ message: "error message by us" })
    }
}


export const getLabItemByid = async (request, response) => {
    try{
        const labitem = await LabItem.findById(request.params.id);
        response.status(200).json(labitem);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const editLabItem = async (request, response) => {
    let labitem = request.body;
    
    const editLabItem = new LabItem(labitem);
    
    try{
        await LabItem.updateOne({_id: request.params.id}, editLabItem);
        response.status(201).json(editLabItem);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


export const deleteLabItem = async (request, response) => {
    try{
        await LabItem.deleteOne({_id: request.params.id});
        response.status(201).json("Lab Item deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
