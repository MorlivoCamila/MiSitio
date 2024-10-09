import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyDlTbl27IUluWMfv97Y5G_QZJUNGvV0OJY",
  authDomain: "miscertificaciones-ef08c.firebaseapp.com",
  projectId: "miscertificaciones-ef08c",
  storageBucket: "miscertificaciones-ef08c.appspot.com",
  messagingSenderId: "115357507792",
  appId: "1:115357507792:web:d2fad14b76e0a5764fbed5",
  measurementId: "G-GB2CLDCHJ5"

};

const app = initializeApp(firebaseConfig);
export const db = getAnalytics(app);