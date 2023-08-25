import React, {useState} from 'react'


// editTodoForm -  functional component which is taking two props(properties) 
// props - read-only components
// props are used to store data that can be accessed by the children of a React component
export const EditTodoForm = ({editTodo, task}) => {
 
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
      
      // prevent default action
        e.preventDefault();
        
      // edit todo
        editTodo(value, task.id); 

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}> 
    <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
} 
