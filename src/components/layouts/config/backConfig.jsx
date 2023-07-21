import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA5PRlA8v9xJYzcmwhib0GmmmzFwNyuuKs",
  authDomain: "back-maria-suculentas.firebaseapp.com",
  projectId: "back-maria-suculentas",
  storageBucket: "back-maria-suculentas.appspot.com",
  messagingSenderId: "150568149298",
  appId: "1:150568149298:web:6ba974126b1625e968f72b"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)