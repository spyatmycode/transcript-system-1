import './App.css';
import Form from './Component/Form';
import Login from './Component/Login';

import { auth } from './firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


import Transcript from './Component/Transcript';
import Admin from './Component/Admin';

function App() {



  return (
    <div className="App">

      <Admin />
      {/* <Form /> */}

    </div>
  );
}

export default App;
