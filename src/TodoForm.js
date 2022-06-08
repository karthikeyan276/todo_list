import { Button } from '@mui/material'
import React from 'react'

const  TodoForm=({input,setInput,todos,setTodos})=> {
        const onInputChange = (event)=>{
            setInput(event.target.value);
        };

        const onFormSubmit = (event)=>{
            event.preventDefault()
            setTodos([...todos,{title:input,completed:false}]);
            setInput("")
        };

    return (
        <div className='container'>
            <form onSubmit={onFormSubmit}>
        <input type="text" placeholder = "Enter Todo" 
        value={input}
        required
         onChange={onInputChange}
        
        />
        <Button > Add</Button>

            </form>
            
        </div>
    )
}

export default TodoForm