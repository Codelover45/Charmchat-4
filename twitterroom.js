var firebaseConfig = {
    apiKey: "AIzaSyDiD0g3XWUyQBJ9JhKqaHQdwl_DvKhj5KQ",
    authDomain: "charmchat-310a4.firebaseapp.com",
    databaseURL: "https://charmchat-310a4-default-rtdb.firebaseio.com",
    projectId: "charmchat-310a4",
    storageBucket: "charmchat-310a4.appspot.com",
    messagingSenderId: "214326868758",
    appId: "1:214326868758:web:4ac1076ac226de9b03ae37"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome" + user_name;
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Room Name - " + Room_name);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this,id)' >#" + Room-names +"</div><hr>";
        document.getElementById("output"),innerHTML += row;
        });});}
  getData();
  
  function addRoom()
  {
       room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
        });
  
        localStorage.setItem("room_name", room_name);
  
        window.location = "kwitter_page.html";
  }
  
  function redrictToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }
  
  
  
  function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "kwitter.html";
  }