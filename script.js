const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav =document.getElementById('nav');
const image1 =document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Light and Dark Images 
function imageMode(color) {
  image1.src = `image/undraw_happy_feeling_${color}.svg`
  image2.src = `image/undraw_office_snack_${color}.svg`
  image3.src = `image/undraw_healthy_lifestyle_${color}.svg`
}

function toggleLightDarkMode(isDark) {
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

//Switch Theme Dynamically
function switchTheme(event) {
  if(event.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME);
    localStorage.setItem('theme', DARK_THEME)
    toggleLightDarkMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    localStorage.setItem('theme', LIGHT_THEME)
    toggleLightDarkMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme')
if(currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if(currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleLightDarkMode(true);
  }
}