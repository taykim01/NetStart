import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCp-8Zr_VV_-NrvWh6mGXP6qRY2WrRPwFA",
  authDomain: "netstart-bc462.firebaseapp.com",
  projectId: "netstart-bc462",
  storageBucket: "netstart-bc462.appspot.com",
  messagingSenderId: "427192160971",
  appId: "1:427192160971:web:a68d93954b6758db8cc14e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);