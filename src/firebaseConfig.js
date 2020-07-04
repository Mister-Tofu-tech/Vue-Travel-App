import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAm-I8HqVbA0zsMEFV3gykql_EyjUIskvk",
  authDomain: "vue-travel-app-2ea2a.firebaseapp.com",
  databaseURL: "https://vue-travel-app-2ea2a.firebaseio.com",
  projectId: "vue-travel-app-2ea2a",
  storageBucket: "vue-travel-app-2ea2a.appspot.com",
  messagingSenderId: "954880016679",
  appId: "1:954880016679:web:48dff50fd266e624542902",
  measurementId: "G-1VRS0JFVJ5",
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();
