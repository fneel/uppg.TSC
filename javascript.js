console.log("test")


// menyknapp på/av
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // menyknapp stäng om utanför
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }