import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBRcQHp8D1LbLXhsjyS4zW7zR82_mMMu0Y",
    authDomain: "unmute-5da50.firebaseapp.com",
    projectId: "unmute-5da50",
    storageBucket: "unmute-5da50.appspot.com",
    messagingSenderId: "971041963005",
    appId: "1:971041963005:web:803098d18c067e92727794",
    measurementId: "G-1SPC0JBKKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };

export default app;
