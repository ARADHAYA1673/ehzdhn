//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCzJcCQbZoTtVe4EWa8wCD3viSWi0iLcrk",
    authDomain: "lets-chat-7c9cb.firebaseapp.com",
    databaseURL: "https://lets-chat-7c9cb-default-rtdb.firebaseio.com",
    projectId: "lets-chat-7c9cb",
    storageBucket: "lets-chat-7c9cb.appspot.com",
    messagingSenderId: "919341033674",
    appId: "1:919341033674:web:60a5fb0673e3515d79ac33"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 User_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name"); 
 console.log(room_name);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function Logout()
{
      window.location ="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
  
}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:User_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}