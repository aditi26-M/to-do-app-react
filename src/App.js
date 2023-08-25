
import './App.css';
import { useState } from 'react';
import { TodoWrapper } from './components/TodoWrapper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    // <div className= "App">
    //   <TodoWrapper/>
    //   {/* {isLoggedIn ? <TodoWrapper/> : <>
    //     <LoginPage/>
    //   </>
    //   } */}
    // </div>
     
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Login />}></Route>
        <Route path = '/signup' element = {<Signup />}></Route>
        <Route path = '/todo' element = {<TodoWrapper />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
