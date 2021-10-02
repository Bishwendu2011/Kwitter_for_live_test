
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDRdBg7-z5I4OGTp6SjQnDsDoEoYC7abXE",
      authDomain: "class-test-7cb73.firebaseapp.com",
      projectId: "class-test-7cb73",
      storageBucket: "class-test-7cb73.appspot.com",
      messagingSenderId: "701283057440",
      appId: "1:701283057440:web:ae840f67861fb7a875e145"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.locatiom = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.Location = "kwitter.html";
}