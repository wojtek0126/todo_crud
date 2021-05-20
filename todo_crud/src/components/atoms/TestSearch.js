import { useState, useEffect } from 'react'
import React from 'react'
import { getAllTasks } from '../../API/fetch'  


const TestSearch = () => {
 const [toSearch, setToSearch] = useState("")
 const [searchResults, setSearchResults] = useState([]);
 const [taskList, setTaskList] = useState([]);
 const [taskText, setTaskText] = useState([]);
 const [filteredData, setFilteredData] = useState([]);


 useEffect(() => {
    getAllTasks(`todos`, setTaskList);    
 }, [])

 useEffect(() => {

    taskList.map(el => {        
        setTaskText(taskText => [...taskText, el.text]);})
  
     }, [taskList])

 useEffect(() => {
    let results = taskText.filter(item =>
      item.toString().toLowerCase().includes(toSearch)
    );
    setSearchResults(results); 
  }, [toSearch]);  

let filterData = taskList.filter(item => item.text.includes(toSearch));

    const handleChange = (e) => {
        setToSearch(e.target.value);
    }


    return (
        <div className="App">
        <input
          type="text"
          placeholder="Search"
          value={toSearch}
          onChange={handleChange}
        />
        <ul>
           {filterData.map(item => (
            <li>{item.id}</li>
          ))}
        </ul>
      </div>
    )
}


export default TestSearch;