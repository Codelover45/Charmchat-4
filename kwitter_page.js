var firebaseConfig = {
    apiKey: "AIzaSyDkqIHpY3vTGOelfBvE443yXMbDySYkK5I",
    authDomain: "chatapp-49cbc.firebaseapp.com",
    databaseURL: "https://chatapp-49cbc-default-rtdb.firebaseio.com",
    projectId: "chatapp-49cbc",
    storageBucket: "chatapp-49cbc.appspot.com",
    messagingSenderId: "57668332192",
    appId: "1:57668332192:web:704857c271300d814e77c5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}