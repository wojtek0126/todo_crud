// json-server --watch src/API/todos.json --host 127.0.0.1
import {API} from "./variables"

//test
// export const getAllTasks = (setArray) => {
//     fetch(`${API}/todos`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             setArray(data);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

//get all the tasks from database - for 'main view' view
export const getAllTasks = (itemsToGet, successCallback) => {
    fetch(`${API}/${itemsToGet}`)
        .then(response => response.json())
        .then(data => {
            successCallback(data);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);
            }
        })
        .catch(error => {
            console.log(error);           
        });
}

//get single task - for 'view task' view
export const getSingleTask = (itemsToGet, id, successCallback) => {
    fetch(`${API}/${itemsToGet}/${id}`)
        .then(response => response.json())
        .then(data => {
            successCallback(data);
            console.log(data, "fetch get player for draw przed succescallbackiem");
        })
        .catch(error => {
            console.log(error);            
        });
}

//add a task - for 'task create/add' view
export const addTask = (itemsToGet, taskData, successCallback) => {
    fetch(`${API}/${itemsToGet}`, {
        headers: {
            // "Authorization": API_KEY,
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
export const updatePlayerStats = (itemsToGet, id, modified, successCallback) => {
    fetch(`${API}/${itemsToGet}/${id}`, {
        headers: {
            // "Authorization": API_KEY,
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
export const deleteTask = (itemsToGet, id, successCallback) => {
    fetch(`${API}/${itemsToGet}/${id}`, {
        headers: {
            // "Authorization": API_KEY
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