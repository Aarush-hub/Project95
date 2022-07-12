var firebaseConfig = {
    apiKey: "AIzaSyCy3GJ1G95iWf0OelIUcKPmHbJNj5wHRc0",
    authDomain: "kwitter-666c2.firebaseapp.com",
    databaseURL: "https://kwitter-666c2-default-rtdb.firebaseio.com",
    projectId: "kwitter-666c2",
    storageBucket: "kwitter-666c2.appspot.com",
    messagingSenderId: "751885254833",
    appId: "1:751885254833:web:78221b2d248620f5be6290"
  };
  
  firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send() 
{
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();
