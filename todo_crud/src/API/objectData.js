// model of task data
const taskData = (nameData, description, notes, status) =>
 {  
    let task = {
        name: nameData,
        description: description,
        notes: notes ,
        status: status 
    }         
    return task            
};  

export default taskData