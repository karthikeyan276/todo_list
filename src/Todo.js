
import React,{useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";




const Todo = ()=>{
    const [input,setInput] = useState("");
    const [todos,setTodos]=useState([]);


return(
    <div>
        
        <TodoForm
        input ={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        
        />
<div>
<TodoList todos={todos} setTodos={setTodos}/>

</div>

    </div>
)
}


export default Todo