
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
      getData();
      User_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + User_name+"!";
      function addRoom()
      {
            room_names = document.getElementById("room_name").value;
      
            firebase.database().ref("/").child(room_names).update({
                  purpose : "adding room name"
            });
      
            localStorage.setItem("room_name" , room_names);
      
            window.location = "kwitter_page.html";
      }
      function redirectToRoomName(name)
      {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
      }
      function logout()
      {
            window.location ="index.html";
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
      
      }
      