  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDVOJjLzm0lktgode2h3tVH0RlcT4aw0Ew",
    authDomain: "hiii-b662f.firebaseapp.com",
    projectId: "hiii-b662f",
    storageBucket: "hiii-b662f.appspot.com",
    messagingSenderId: "277666562791",
    appId: "1:277666562791:web:ebfc1fdaaf813c90e6d842",
    measurementId: "G-BPKVVJWCVH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  document.getElementById("submit").addEventListener('click',function(e){

    this.setAttribute(ref(db,'user/' + document.getElementById("email").value),
    {
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    });
        alert("Congratulations Login Sucessfull!");
  })
