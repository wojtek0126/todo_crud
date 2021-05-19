// json-server --watch src/API/todos.json --host 127.0.0.1
import { API, API_TOKEN } from "./variables";


//get all the tasks from database - for 'main view' view
export const getAllTasks = (successCallback) => {
    fetch(`${API}`)
        .then(response => response.json())
        .then(data => {
            successCallback(data.data);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(error => {
            console.log(error);           
        });
}

//get single task - for 'view task' view
export const getSingleTask = (id, successCallback) => {
    fetch(`${API}/${id}`)    
        .then(response => response.json())
        .then(data => {
            successCallback(data.data);          
        })
        .catch(error => {
            console.log(error);            
        });
}

//add a task - for 'task create/add' view
export const addTask = (taskData, successCallback) => {
    fetch(`${API}`, {
        headers: {
            "Authorization": API_TOKEN,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(taskData)
    })
        .then(r => r.json())
        .then(data => {            
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);             
            }
        })
        .catch(err => console.log(err));
};

//edit task - for 'edit task' view
export const updateTask = (id, modified, successCallback) => {
    fetch(`${API}/${id}`, {
        headers: {
            "Authorization": API_TOKEN,
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(modified)
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err));
};

//delete task - for 'edit task' view
export const deleteTask = (id, successCallback) => {
    fetch(`${API}/${id}`, {
        headers: {
            "Authorization": API_TOKEN
        },
        method: "DELETE"
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback();
            }
        })
        .catch(err => console.log(err));
};