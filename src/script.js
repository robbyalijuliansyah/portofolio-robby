// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

//Pindahkan posisi toggle sesuai mode

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

//Typing Text
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = ["Programmer", "Fron-End Developer", "Back-End Developer"];
  let index = 0;
  let textIndex = 0;
  const rotateText = document.getElementById("rotateText");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
      const currentText = toRotate[index];

      if (isDeleting) {
          rotateText.textContent = currentText.substring(0, textIndex--);
          if (textIndex < 0) {
              isDeleting = false;
              index = (index + 1) % toRotate.length;
              setTimeout(typeEffect, typingSpeed);
          } else {
              setTimeout(typeEffect, deletingSpeed);
          }
      } else {
          rotateText.textContent = currentText.substring(0, textIndex++);
          if (textIndex > currentText.length) {
              isDeleting = true;
              setTimeout(typeEffect, delayBetweenWords);
          } else {
              setTimeout(typeEffect, typingSpeed);
          }
      }
  }

  typeEffect()
}); 

//email.js
function sendMessage() {
  (function(){
    Emailjs.init("m7-xZoUufwocluYmo"); //Kunci Akun Publik
  })();

  var serviceID = "service_l7nzlon"; // Email Service ID
  var templateID = "template_0bv8svi"; // Email Template ID

  var params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    message: document.querySelector("#message").value
  };

  emailjs.send(serviceID, templateID, params)
  .then(res => {
    alert('Thank you,' + params['sendername'] + '! Yous message has been sent.');
  })
  .catch();
}