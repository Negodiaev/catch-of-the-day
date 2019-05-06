import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnXjCvYvpwc2lE5CwN3X3Qjq3A1cRwFYU",
    authDomain: "catch-of-the-day-ngdv.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ngdv.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
