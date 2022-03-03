var firebaseConfig = {
  apiKey: "AIzaSyDOd9Xx0K877ZggMvVvrZ_JSYlnEhHT0ZE",
  authDomain: "kwitter-aa1f7.firebaseapp.com",
  databaseURL: "https://kwitter-aa1f7-default-rtdb.firebaseio.com",
  projectId: "kwitter-aa1f7",
  storageBucket: "kwitter-aa1f7.appspot.com",
  messagingSenderId: "964176045698",
  appId: "1:964176045698:web:be9dc5ba274ca60abc769b"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0,
  });
  document.getElementById("msg").value = "";
}
function getData() {
  firebase
    .database()
    .ref("/" + room_name)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code

          //End code
        }
      });
    });
}
getData();




