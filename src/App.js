import './App.css';
import Form from './Component/Form';
import Login from './Component/Login';

import { auth } from './firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
function App() {

  createUserWithEmailAndPassword(auth, "akejunifemi11@gmail.com", "123456")
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return (
    <div className="App">
      <Form />
      <Login />
    </div>
  );
}

export default App;
