  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAQ3wuMNDTK6tDhVkHrrlaZHl8enoLICSI",
    authDomain: "benugo-xmas.firebaseapp.com",
    databaseURL: "https://benugo-xmas.firebaseio.com",
    storageBucket: "benugo-xmas.appspot.com",
    messagingSenderId: "786727795972"
  };
  firebase.initializeApp(config);

var productsData = firebase.database().ref("products");

var productsList = []

productsData.on("child_added", function(childData) 
{
    productsList.push(childData.val())
})

