import './App.css';
import Form from './Component/Form';
import Login from './Component/Login';
import { auth } from './firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Header from './Component/Header';
import Transcript from './Component/Transcript';
import Admin from './Component/Admin';
import Protected from './Component/Protected';
import LoginProtect from './Component/LoginProtect';
import { Routes, BrowserRouter, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function App() {



  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged") ? JSON.parse(localStorage.getItem("isLogged")) : false)







  return (
    <div className="App">

      
      <BrowserRouter>
        <Routes>

          <Route element={<LoginProtect isLogged={isLogged}><Login setIsLogged={setIsLogged} /></LoginProtect>} path="/login" />



          <Route path="/" element={<Header />}>

            <Route index element={<Admin />} />
            <Route element={<Protected isLogged={isLogged}><Form /></Protected>} path='/fill-form' />
            <Route element={<Protected isLogged={isLogged}><Admin /></Protected>} path='/dashboard' />
            <Route element={<Protected isLogged={isLogged}><Transcript /></Protected>} path='/transcript' />




          </Route>

          <Route path='*' element={<div className='font-bold text-6xl text-red-600 text-center mt-[50vh]'>404 Error: Page not found</div>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
