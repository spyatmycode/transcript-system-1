import './App.css';
import Form from './Component/Form';
import Login from './Component/Login';
import Header from './Component/Header';
import Transcript from './Component/Transcript';
import Admin from './Component/Admin';
import Protected from './Component/Protected';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {



  const [isLogged, setIsLogged] = useState(false)

  //Nifemi: On App open, we check for isLogged  key ... else we set isLogged to false






  return (
    <div className="App">




      <BrowserRouter>
        <Routes>

          {/* All routes are shown below */}


          <Route element={<Header setIsLogged={setIsLogged} isLogged={isLogged} />}>


            <Route element={<Protected isLogged={!isLogged}><Login isLogged={!isLogged} setIsLogged={setIsLogged} /></Protected>} path='/login' />


            <Route element={<Protected isLogged={isLogged}><Form /></Protected>} path='/fill-form' />


            <Route element={<Protected isLogged={isLogged}><Admin /></Protected>} path='/' index />


            <Route element={<Protected isLogged={isLogged}><Transcript /></Protected>} path='/transcript' />


            <Route path='*' element={<div className='font-bold text-6xl text-red-600 text-center mt-[50vh]'>404 Error: Page not found</div>} />

          </Route>

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
