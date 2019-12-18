function login(){
        if ($("#username").val() == "admin" && $("#password").val() == "admin") {
          window.location.replace("indexadmin.html");
        }else if ($("#username").val() == "" && $("#password").val() == ""){
          alert("Harus Diisi");
        }else{
          alert("Username dan Password salah");
        }
      }

      var modal = document.getElementById("myModal");

      var btn = document.getElementById("modalBtn");

      var span = document.getElementsByClassName("close")[0];

      btn.onclick = function() {
        modal.style.display = "block";
      }

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }