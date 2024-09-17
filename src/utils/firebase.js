import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUg7fdWry-N5S_oLhPWk9zERVMu_THoKY",
  authDomain: "ecommercesastabazar.firebaseapp.com",
  projectId: "ecommercesastabazar",
  storageBucket: "ecommercesastabazar.appspot.com",
  messagingSenderId: "590381296522",
  appId: "1:590381296522:web:f05caa3f25a162afc17673",
  measurementId: "G-ZH0KK0MJQH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app };
