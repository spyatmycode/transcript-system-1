import './App.css';
import Form from './Component/Form';
import Login from './Component/Login';

import { auth } from './firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Admin from './Component/Admin';
function App() {



  return (
    <div className="App">

      <Admin />



    </div>
  );
}

export default App;
