function  addUser(){
    var userName = document.getElementById("userName").value;

    var removeSpaces = userName.replaceAll(" ", "");

    console.log(userName);

    if(userName == null||userName.length == 0||removeSpaces.length==0){
        window.alert("Please enter a username");
    } else {
        localStorage.setItem("userName",userName);
        console.log(userName);
        
        window.location = "kwitter_room.html"
    }
}