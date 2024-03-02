import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCwXb0v4POiK1aDX1_kIbLordhL87w7feE",
  authDomain: "binks-ecommerce.firebaseapp.com",
  projectId: "binks-ecommerce",
  storageBucket: "binks-ecommerce.appspot.com",
  messagingSenderId: "742920241741",
  appId: "1:742920241741:web:8928aec208563ad1fb9204",
  measurementId: "G-4KRB1Z5CDD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app,auth}