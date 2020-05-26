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
  
 firebase.initializeApp(firebaseConfig);
var messagesRef= firebase.database().ref('messages');
messagesRef.on('value',getData,errData);

var list = document.getElementById('tasks_list');

function getData(data){

var tasks=data.val();
var keys=Object.keys(tasks);
console.log(keys);
for(var i=0;i<keys.length;i++){
  var k=keys[i];
  var title=tasks[k].title;
  var deadline=tasks[k].deadline;
  
  var entry=document.createElement('li');
  entry.appendChild(document.createTextNode(title+' : ' + deadline));
  list.appendChild(entry);
}
}
function errData(err){
consol.log('error');
 consol.log(err);
}
