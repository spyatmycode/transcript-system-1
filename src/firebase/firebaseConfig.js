import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyByEdy32ZMhMezm4YgkQoam3FaCN2bnUF4",
//     authDomain: "transcript-system-c5497.firebaseapp.com",
//     projectId: "transcript-system-c5497",
//     storageBucket: "transcript-system-c5497.appspot.com",
//     messagingSenderId: "877840813262",
//     appId: "1:877840813262:web:9ed8f21d75cf998acc549f",
//     measurementId: "G-87ZF0NMCDC"
// };

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeJnF_pX2eq6vrHtlo3Dk4F6WrIMSHRxI",
    authDomain: "final-c6a63.firebaseapp.com",
    projectId: "final-c6a63",
    storageBucket: "final-c6a63.appspot.com",
    messagingSenderId: "618261984698",
    appId: "1:618261984698:web:37001e558db11763405983"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const auth = getAuth(app)



const analytics = getAnalytics(app);


