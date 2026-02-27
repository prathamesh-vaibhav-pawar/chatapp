const firebaseConfig = {
  apiKey: "AIzaSyCEXiMprF7MjmkYl0UwVZaWfl5_yVE43dk",
  authDomain: "tryyy-a1a61.firebaseapp.com",
  databaseURL: "https://tryyy-a1a61-default-rtdb.firebaseio.com",
  projectId: "tryyy-a1a61",
  storageBucket: "tryyy-a1a61.firebasestorage.app",
  messagingSenderId: "54530147082",
  appId: "1:54530147082:web:090edc97d14da80df730f3",
  measurementId: "G-P46J0D8JNB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
User_name = localStorage.getItem("UserName")
document.getElementById("h3").innerHTML = "Welcome"+User_name+"!"

function AddRoom(){
      Room_name = document.getElementById("Room_name").value 
      localStorage.setItem("Room_name",Room_name)
      firebase.database().ref("/").child(Room_name).update({
            Data:"Data Stored"
      })
      window.location = "Kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      var Row = "<div class='room_name' id =" +Room_names+" onclick = 'redirect(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+= Row
      //End code
      });});}
getData();

function redirect(name){
      console.log(name)
      localStorage.setItem("Room_name",name)
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("UserName")
      localStorage.removeItem("Room_name")
      window.location = "index.html"
}
