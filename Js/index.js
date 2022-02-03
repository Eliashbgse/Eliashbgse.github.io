let clicked = false

function OpenMobileNav(){
  if(clicked){
    document.getElementById("dropdownid").classList.remove('show');
    clicked = false
  }
  else{
    document.getElementById("dropdownid").classList.toggle("show");
    clicked = true
  }
  
  
}

