
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW4KL77CiYGuyKON1CCOIWljOH725tP4Y",
  authDomain: "fir-react-3baa3.firebaseapp.com",
  projectId: "fir-react-3baa3",
  storageBucket: "fir-react-3baa3.appspot.com",
  messagingSenderId: "286602876308",
  appId: "1:286602876308:web:ea42321200175ad4f16b81"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };