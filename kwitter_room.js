var firebaseConfig = {
    apiKey: "AIzaSyC3lTZZbcmA0qvcCsl2X9B0dUM3GRUOGdQ",
    authDomain: "lets-chat-web-app-4a7ca.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-4a7ca-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-4a7ca",
    storageBucket: "lets-chat-web-app-4a7ca.appspot.com",
    messagingSenderId: "575855192100",
    appId: "1:575855192100:web:d5b24e626f873362e750b1"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome - "+ user_name +"!";

  function addRoom()
  {
   room_name= document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name)
  window.location= "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("Room name"+ Room_names)
 row ="<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName()'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML +=row; 



});});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location= "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";
}
