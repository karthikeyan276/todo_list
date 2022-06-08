import React, { useState } from "react";
import "./todoapp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
        incase:true
      };
      

      setTaskList([...tasklist, taskDetails]);
    }
    tasklist.push(task)
      let ss = localStorage.setItem("Andoridd",JSON.stringify(tasklist))
      console.log(ss);
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id != id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    //let's find index of element
    const element = tasklist.findIndex((elem) => elem.id == id);

    //copy array into new variable
    const newTaskList = [...tasklist];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };
  let Jean = JSON.parse(localStorage.getItem("Andoridd"));
  return (
    <div className="todo">
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li style={{marginBottom:"500"}} className={t.isCompleted ? "crossText" : "listitem"}>
              {t.value}
              <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                Completed
              </button>

              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <div style={{position:"fixed",top:"80%"}}>
        <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add task ..."
      />
      <button  className="add-btn" onClick={AddTask}>
        Add
      </button>
      </div>
      
      {
            Jean.map((w)=>{
                return(
                    <div style={{color:"black"}}>
                        <h1>Id:{w.id}</h1>    
                        <h1>value:{w.value}</h1>
                   <button  onClick={(e) => taskCompleted(e)} >+</button>
                        </div>

                )
            })
        }
      
    </div>
  );
}

export default TodoApp;