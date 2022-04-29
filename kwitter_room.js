
var firebaseConfig = {
      apiKey: "AIzaSyD0GxhBkuovJsm9PrbaKAWi0n86N2AWx-8",
      authDomain: "kwitter-a81f3.firebaseapp.com",
      databaseURL: "https://kwitter-a81f3-default-rtdb.firebaseio.com",
      projectId: "kwitter-a81f3",
      storageBucket: "kwitter-a81f3.appspot.com",
      messagingSenderId: "827263873123",
      appId: "1:827263873123:web:ec3ede7e8cb3976c4d4856"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
      window.getlocation(index.html);
}
