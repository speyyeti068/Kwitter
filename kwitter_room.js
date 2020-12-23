var firebaseConfig = {
      apiKey: "AIzaSyAoyi7OaRmuel04ymWWN6M08aNPPtjnQNI",
      authDomain: "kwitter-9ec6b.firebaseapp.com",
      projectId: "kwitter-9ec6b",
      storageBucket: "kwitter-9ec6b.appspot.com",
      messagingSenderId: "1024571245066",
      appId: "1:1024571245066:web:23de98b261d4896f9995f3"
    };

    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();