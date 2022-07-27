const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav =document.getElementById('nav');
const image1 =document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  image1.src = 'image/undraw_happy_feeling_dark.svg'
  image2.src = 'image/undraw_office_snack_dark.svg'
  image3.src = 'image/undraw_healthy_lifestyle_dark.svg'
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  image1.src = 'image/undraw_happy_feeling_light.svg'
  image2.src = 'image/undraw_office_snack_light.svg'
  image3.src = 'image/undraw_healthy_lifestyle_light.svg'
}

//Switch Theme Dynamically
function switchTheme(event) {
  if(event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);