import React, {useEffect, useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import axios from 'axios';

uuidv4()
 
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])
//  todos - current state, setTodos - function to update state, useState - empyt array intitally
  
/*  Spread Operator
   arr = [1,4,2,4,6]
   arr2 = [...arr, 0,9,8] = [1,4,2,4,6, 0, 9, 8]
   */


  const addTodo = todo => {
    const dataObj = {
      taskDescription: todo,
    }
    const axiosObj = {
      method: 'post',
      url: 'http://localhost:8080/api/v1/addTask',
      data: dataObj,
      mode:'no-cors'
    }
    axios(axiosObj).then((response)=>{
      // setTodos(response.data.taskList)
      // getTaskList()
    }).catch((err) => console.log('Error', err))
    // setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    //console.log(todos)
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodo = id  => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo));
  }

  const editTask = (task, id) => {
    const axiosObj = {
      method: 'post',
      url: `http://localhost:8080/api/v1/updateTask?taskDescription=${task}&taskId=${id}`
    }
    axios(axiosObj).then((response)=>{
      // setTodos(response.data.taskList)
      getTaskList()
    }).catch((err) => console.log('Error', err))
    // setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const getTaskList = () => {
    const axiosObj = {
      method: 'get',
      url: 'http://localhost:8080/api/v1/addTask'
    }
    axios(axiosObj).then((response)=>{
      setTodos(response.data.taskList)
    }).catch((err) => console.log('Error', err))
  }

  useEffect(() => {
    // getTaskList()
  }, [])

/**
 * {
 *  taskList: [task1, task2]
 * }
 */

  return (
    <div className='TodoBody'>
      <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
          <TodoForm addTodo = {addTodo}/> 
          {todos.map((todo, index) => (                  //map - for loop
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task = {todo}/>           
            ) : (
              <Todo 
              task = {todo} 
              key={index} 
              toggleComplete={toggleComplete}
              deleteTodo = {deleteTodo} 
              editTodo = {editTodo} 
              />
            )          
          ))}
      </div>
    </div>
    
  )
}
