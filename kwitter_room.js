var firebaseConfig = {
  apiKey: "AIzaSyDOd9Xx0K877ZggMvVvrZ_JSYlnEhHT0ZE",
  authDomain: "kwitter-aa1f7.firebaseapp.com",
  databaseURL: "https://kwitter-aa1f7-default-rtdb.firebaseio.com",
  projectId: "kwitter-aa1f7",
  storageBucket: "kwitter-aa1f7.appspot.com",
  messagingSenderId: "964176045698",
  appId: "1:964176045698:web:be9dc5ba274ca60abc769b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}


function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room Name-" + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)'>#" +
          Room_names +
          "</div><hr> ";
        document.getElementById("output").innerHTML = row;
        //End code
      });
    });
}

getData();


function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
