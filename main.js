
function setCSSVariable(name, value) {
  document.documentElement.style.setProperty(name, value);
}

setCSSVariable('--purple', '#8A79DF');
setCSSVariable('--blue-black', '#212832');
setCSSVariable('--dark-blue', '#181E4B');
setCSSVariable('--creame-orange', '#FF7152');
setCSSVariable('--ink-blue', '#4152CA');
setCSSVariable('--purple-blue', '#6246E5');
setCSSVariable('--h-yellow', '#F0BB1F');
setCSSVariable('--silver-grey', '#E5E5E5');
setCSSVariable('--navy-blue', '#14183E');
setCSSVariable('--orange', '#F15A2B');
setCSSVariable('--sea-green', '#006380');
setCSSVariable('--angular', '#B8D2F1, #F289AA, #C68BF0, #D164DA, #C963E8, #BFC2E8, #FFC999, #D0D8C9, #BAD0F1, #CED8CB, #FFFFFF');
setCSSVariable('--black', '#080809');
setCSSVariable('--border-colur', '#F7F7F7');
setCSSVariable('--circle', '#F5F5F5');
setCSSVariable('--d2', '#D5AEE4');
setCSSVariable('--d5', '#2196F3');
setCSSVariable('--d6', '#4CAF50');
setCSSVariable('--gradient', '#FF946D, #FF7D68');
setCSSVariable('--gradient-02', '#747DEF, #5E3BE1');
setCSSVariable('--light-color', '#DFD7F9');
setCSSVariable('--text-2', '#84829A');
setCSSVariable('--TEXT-CLR', '#5E6282');
setCSSVariable('--text-color', '#686D77');
setCSSVariable('--TEXT-COLOR', '#39425D');
setCSSVariable('--text-heading-color', '#1E1D4C');
setCSSVariable('--white', '#FFFFFF');
setCSSVariable('--yellow', '#F1A501');
setCSSVariable('--d1', '#3A556A');
setCSSVariable('--d4', '#029BC5');
setCSSVariable('--d3', '#D5D6DB');
setCSSVariable('--d6', '#407093');
setCSSVariable('--d7', '#FFF1DA');
setCSSVariable('--d8', '#DF6951');

window.addEventListener('load', function () {
  var body = document.querySelector('body');
  body.style.backgroundImage = "url(images/Decore.png)";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "top right";
  body.style.backgroundSize = "contain";
});

window.addEventListener('load', function () {
  var body = document.querySelector('body');
  body.style.paddingLeft = "140px";
});


var buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
  button.addEventListener('mouseover', function () {
    button.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--blue-black');
    button.style.color = getComputedStyle(document.documentElement).getPropertyValue('--white');
  });
  button.addEventListener('mouseout', function () {
    button.style.backgroundColor = 'transparent';
    button.style.color = getComputedStyle(document.documentElement).getPropertyValue('--blue-black');
  });
});


var playDemoButton = document.getElementById('play-demo');
playDemoButton.addEventListener('click', function () {

  console.log('Play Demo button clicked');
});

function openFacebook() {
  window.open("https://www.facebook.com");
}

function openInstagram() {
  window.open("https://www.instagram.com");
}

function openTwitter() {
  window.open("https://www.twitter.com");
}
function highlightImage(element) {
  element.classList.add("highlighted");
}

function removeHighlight(element) {
  element.classList.remove("highlighted");}
