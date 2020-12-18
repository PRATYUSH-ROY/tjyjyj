window.onload = function() {
    var firebaseConfig = {
        apiKey: "AIzaSyC7NKPbLgUYgtwCKexC97I9f-5GNzhrrfI",
        authDomain: "tkwitter-66728.firebaseapp.com",
        projectId: "tkwitter-66728",
        storageBucket: "tkwitter-66728.appspot.com",
        messagingSenderId: "1090902628477",
        appId: "1:1090902628477:web:0b809acd97a080605a7914",
        measurementId: "G-8R88Q1EC8F"
    };

    firebase.initializeApp(firebaseConfig);
}

function adduser() {
    var name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(name).update({
        purpose: "adding room name"
    });
}