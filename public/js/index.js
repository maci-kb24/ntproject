//Fixed navigation
window.onscroll = function() {
  myFunction();
};

const navbar = document.getElementById("menu");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Dropdown menu
const dropdownBtn = document.querySelector(".header-btn")
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownBtn.addEventListener('click',()=>{
  if(dropdownMenu.style.display===""){
     dropdownMenu.style.display="block";
  } else {
     dropdownMenu.style.display="";
  }
})
