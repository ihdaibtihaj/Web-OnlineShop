function myFunction() {
    document.getElementById("myLink").classList.toggle("tampilkan");
}

window.onclick = function(e) {
  if (!e.target.matches('.linkbtn')) {

    var dropdowns = document.getElementsByClassName("linkdropdown");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('tampilkan')) {
        openDropdown.classList.remove('tampilkan');
      }
    }
  }
}