// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const IntializeAssignmentApp = () => {
    initializeApp(firebaseConfig);
} 
export default IntializeAssignmentApp