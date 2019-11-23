// -- OPEN/CLOSE OVERLAY NAV --//

function openNav() { //this will expand the navigation when on smaller screens
  var overlay = document.getElementById("overlay-background"); //set overlay div to a variable
  overlay.style.width = "100%"; //set the width to 100%
}

function closeNav() { //this will close the navigation on smaller screens
  var overlay = document.getElementById("overlay-background"); //set overlay div to a variable
  overlay.style.width = "0%"; //set the width equal to zero
}