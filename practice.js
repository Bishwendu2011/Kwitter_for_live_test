
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRdBg7-z5I4OGTp6SjQnDsDoEoYC7abXE",
    authDomain: "class-test-7cb73.firebaseapp.com",
    databaseURL: "https://class-test-7cb73-default-rtdb.firebaseio.com",
    projectId: "class-test-7cb73",
    storageBucket: "class-test-7cb73.appspot.com",
    messagingSenderId: "701283057440",
    appId: "1:701283057440:web:ae840f67861fb7a875e145"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebaseConfig.databaseURL().ref("/").child(user_name).update({  
        purpose : "adding user"
      });
  }