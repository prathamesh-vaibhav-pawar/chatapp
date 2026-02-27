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


    User_name = localStorage.getItem("UserName")
    Room_name = localStorage.getItem("Room_name")

    function Send(){
      message = document.getElementById("Message").value 
      firebase.database().ref(Room_name).push({
            User_name:User_name,
            Message:message,
            Likes:0
      })
      document.getElementById("Message").innerHTML = " "
    }

function logout(){
      localStorage.removeItem("UserName")
      localStorage.removeItem("Room_name")
      window.location = "index.html"
}


function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         Message = message_data['Message']
         Name1 = message_data['User_name']
         Likes = message_data['Likes']
          UserName = "<h4>"+Name1+"<img src = 'tick.png' class = 'user_tick'></h4>"
          Message2 = "<h4 class = 'message_h4'>"+Message+"</h4>"
         Like = "<button class = 'btn btn-danger' id ="+firebase_message_id+"  value ="+ Likes+" onclick = 'update(this.id)' ><span class = 'glyphicon glyphicon-thumbs-up'>"+Likes+"</span></button>"
         Row = UserName + Message2+Like
         document.getElementById("output").innerHTML += Row
      } });  }); }
getData();

function update(message_id){
      buttonId = message_id
      like = document.getElementById(buttonId).value
      UpdateLike = Number(like) +1
      firebase.database().ref(Room_name).child(message_id).update({
            Likes:UpdateLike
      })
}

