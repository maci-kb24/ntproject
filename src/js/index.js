//Fixed navigation
window.onscroll = function() {myFunction()};

const navbar = document.getElementById("menu");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Form validation & submission

const form = document.getElementById('contact-form');

form.addEventListener("click", handleSubmit);


const handleSubmit = (e) => {
  e.preventDefault()
  alert('hello');
}
