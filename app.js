// Get elements
const navbarClick = document.querySelector(".navbar-click");
const navbarOverlay = document.querySelector(".navbar-overlay");
const navbarItems = document.querySelector(".navbar-items");
const navbarMobile = document.querySelector(".navbar-mobile");
const body = document.querySelector("body");
// const navbarHrefs = navbarItems.querySelectorAll("a");
const form = document.querySelector('.formContainer form');
const inputs = document.querySelectorAll('.formContainer form input');
const selects = document.querySelectorAll('.formContainer form select');

const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
};
// registration form validation

form.addEventListener('submit', (e) => {
 e.preventDefault();
 inputs.forEach((input) => {
  if(!input.value){
    input.parentElement.classList.add('error');
  } else {
    input.parentElement.classList.remove('error');
    if(input.id == 'email-address'){
      if(validateEmail(input.value)){
      input.parentElement.classList.remove('error');
      } else{
        input.parentElement.classList.add('error');
      }
      }
    }
  
  });
});


// Toggle function for navbar click
const toggleNavClick = () => {
  navbarClick.classList.toggle("is-clicked");
  navbarItems.classList.toggle("is-hidden");
  navbarItems.classList.add("animate__zoomIn");
};

// Event listener for hiding navbar items when clicked outside
navbarOverlay.addEventListener("click", (event) => {
  if (event.target === navbarOverlay) {
    navbarOverlay.classList.add("is-hidden");
    navbarItems.classList.add("is-hidden");
    navbarClick.classList.remove("is-clicked");
  }
});

// Function for showing/hiding overlay
const navbarClickFunction = () => {
  if (navbarOverlay.classList.contains("is-hidden")) {
    navbarOverlay.classList.remove("is-hidden");
    // navbarOverlay.classList.add("animate__zoomIn");
  } else {
    navbarOverlay.classList.add("is-hidden");
  }
};

// Close navbarItems when user scrolls down
// function handleScroll() {
//   const scrollPosition =
//     window.pageYOffset || document.documentElement.scrollTop;

//   if (
//     scrollPosition >= 300 &&
//     navbarItems.classList.contains("navbar-mobile")
//   ) {
//     navbarOverlay.classList.add("is-hidden");
//     navbarMobile.classList.add("is-hidden");
//     navbarClick.classList.remove("is-clicked");
//   }
// }

// Add scroll event listener to the window
// window.addEventListener("scroll", handleScroll);

// Event listener for navbar click
navbarClick.addEventListener("click", () => {
  toggleNavClick();
  navbarClickFunction();
});

//@Media queries for 700px
const mediaQueryMin700 = window.matchMedia("(min-width: 700px)");

function runMediaQueryMin700(event) {
  if (event.matches) {
    navbarItems.classList.remove("navbar-mobile");
    navbarItems.classList.remove("is-hidden");
    navbarItems.classList.add("navbar-desktop");
    navbarOverlay.classList.add("is-hidden");
    //add hover classes to a elements
  //   navbarHrefs.forEach((navbarHref) => {
  //     navbarHref.classList.add("hover-class");
  //     //hover classes is styled in abstracts.css
  //   });
  // } else {
  //   navbarItems.classList.add("navbar-mobile");
  //   navbarItems.classList.add("is-hidden");
  //   navbarItems.classList.remove("navbar-desktop");
  //   navbarClick.classList.remove("is-clicked");
  //   //remove hover classes
  //   navbarHrefs.forEach((navbarHref) => {
  //     navbarHref.classList.remove("hover-class");
  //     console.log(navbarHrefs);
  //   });
  }
}

// mediaQueryMin700.addListener(runMediaQueryMin700);
// runMediaQueryMin700(mediaQueryMin700);