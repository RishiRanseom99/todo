var firebaseConfig = {
    apiKey: "AIzaSyDZuPjJhHmugQY-6kLrZ-F6NJ26Z3vCE4g",
    authDomain: "task-list-d4dd3.firebaseapp.com",
    databaseURL: "https://task-list-d4dd3.firebaseio.com",
    projectId: "task-list-d4dd3",
    storageBucket: "task-list-d4dd3.appspot.com",
    messagingSenderId: "703233572908",
    appId: "1:703233572908:web:6739d6c4c488dc86f85189",
    measurementId: "G-PFH2MW6QV3"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
var database= firebase.database().ref('messages');
database.on('value',getData,errData);

function getData(data){

console.log(data.val());
}