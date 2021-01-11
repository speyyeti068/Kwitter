var firebaseConfig = {
      apiKey: "AIzaSyAoyi7OaRmuel04ymWWN6M08aNPPtjnQNI",
      authDomain: "kwitter-9ec6b.firebaseapp.com",
      databaseURL: "https://kwitter-9ec6b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ec6b",
      storageBucket: "kwitter-9ec6b.appspot.com",
      messagingSenderId: "1024571245066",
      appId: "1:1024571245066:web:23de98b261d4896f9995f3"
    };

firebase.initializeApp(firebaseConfig);

var userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Welcome " + userName + "!";

function addRoom() {
      var roomName = document.getElementById("roomName").value;

      localStorage.setItem("roomName", roomName);
      firebase.database().ref("/").child(roomName).update({
            purpose: "adding room name"
      });
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";

            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room_names = " + Room_names);
                row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
                document.getElementById("output").innerHTML += row;
            });
      });
}

getData();

function redirectToRoomName(roomName){
    console.log(roomName);
    localStorage.setItem("roomName",roomName);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");

    window.location = "index.html";
}