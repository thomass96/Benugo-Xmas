  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAQ3wuMNDTK6tDhVkHrrlaZHl8enoLICSI",
    authDomain: "benugo-xmas.firebaseapp.com",
    databaseURL: "https://benugo-xmas.firebaseio.com",
    storageBucket: "benugo-xmas.appspot.com",
    messagingSenderId: "786727795972"
  };
  firebase.initializeApp(config);

var rootRef = firebase.database().ref().child("products");

rootRef.on("child_added", snap => {
    
    var drink = snap.child.Attr("drink").val();
    var food = snap.child.Attr("food").val();
});

