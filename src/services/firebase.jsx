import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA5PRlA8v9xJYzcmwhib0GmmmzFwNyuuKs",
  authDomain: "back-maria-suculentas.firebaseapp.com",
  projectId: "back-maria-suculentas",
  storageBucket: "back-maria-suculentas.appspot.com",
  messagingSenderId: "150568149298",
  appId: "1:150568149298:web:6ba974126b1625e968f72b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)