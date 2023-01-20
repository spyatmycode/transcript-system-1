import './App.css';
import Form from './Component/Form';
import Login from './Component/Login';

import { auth } from './firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
function App() {



  return (
    <div className="App">

      <Form />

    </div>
  );
}

export default App;
