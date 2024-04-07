  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCs-u91jzQd4A_RTtocgPFkWri8pe1QGqo",
    authDomain: "creativetutorial-f9e1b.firebaseapp.com",
    projectId: "creativetutorial-f9e1b",
    storageBucket: "creativetutorial-f9e1b.appspot.com",
    messagingSenderId: "445108045222",
    appId: "1:445108045222:web:b56da1fbe7d59b946a7b67"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db= getDatabase(app);
  
  
  document.getElementById("submit").addEventListener('click',function(e){
      e.preventDefault();
      set(ref(db,'user/' + document.getElementById("username").value),
    {
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    });
        alert("Congratulations Login Sucessfull!");
  })
 
  