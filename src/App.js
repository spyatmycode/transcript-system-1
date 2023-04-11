import './App.css';
import Form from './Component/Form';
import Login from './Component/Login';
import Header from './Component/Header';
import Transcript from './Component/Transcript';
import Admin from './Component/Admin';
import Protected from './Component/Protected';
import { Routes, BrowserRouter, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './Component/Auth/AuthProvider';
import LoginProtect from './Component/LoginProtect'
import { ContextProvider } from './Component/ContextProvider/ContextProvider';
import { useEffect } from 'react';
import jsPDF from 'jspdf';

function App() {

  





  return (
    <>
    
  <ContextProvider>
      <AuthProvider>
      

    
        <BrowserRouter>
          <Routes>

            {/* All routes are shown below */}



            <Route element={<LoginProtect><Login /></LoginProtect>} path='/login' />


            <Route element={<Header />}>




              <Route element={<Protected><Form /></Protected>} path='/fill-form' />

              <Route element={<Protected><Admin /></Protected>} path='/' index />

              <Route element={<Protected><Transcript /></Protected>} path='/transcript/:id' />

              <Route path='*' element={<div className='font-bold text-6xl text-red-600 text-center mt-[50vh]'>404 Error: Page not found</div>} />

            </Route>

          </Routes>
        </BrowserRouter>
      
      </AuthProvider>
  </ContextProvider>

    </>
  );
}

export default App;
