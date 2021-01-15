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

var roomName = localStorage.getItem("roomName");

var userName = localStorage.getItem("userName");

function sendMessage() {
    var message = document.getElementById("textMessage").value;

    firebase.database().ref(roomName).push({
        name: userName,
        message: message,
        like: 0
    });

    document.getElementById("textMessage").value = "";
}

function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;

                console.log(firebase_message_id);

                console.log(message_data);

                var name = message_data["name"];
                var message = message_data["message"];
                var like = message_data["like"];

                var nameWithTag = "<h4> " + name + "<img class = 'user_tick' src = 'tick.png'> </h4>";
                var messageWithTag = "<h4 class = 'message_h4'> " + message + " </h4>";
                var likeButtonTag = "<button onclick = 'updateLike(this.id)' class = 'btn btn-warning' id = " + firebase_message_id + " value = " + like + "> <span class = 'glyphicon glyphicon-thumbs-up'> Like: " + like + " </span> </button> <hr>"

                var row = nameWithTag + messageWithTag + likeButtonTag;

                document.getElementById("output").innerHTML += row;
            }
        });
    });
}

getData();

function updateLike(messageid) {
    console.log("Clicked on the like button: " + messageid);

    like = document.getElementById(messageid).value;
    var updatedLikes = Number(like) + 1;

    console.log(updatedLikes);

    firebase.database().ref(roomName).child(messageid).update({
        like: updatedLikes
    })
}

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");

    window.location = "index.html";
}