window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  var dropdownMain = document.querySelector('.dropdown_main');

  if (window.scrollY > 0) {
    navbar.style.display = 'none';
    dropdownMain.classList.add('fixed-dropdown-main');
  } else {
    navbar.style.display = 'flex';
    dropdownMain.classList.remove('fixed-dropdown-main');
  }
});


const ellipsisIcon = document.querySelector('.fa-ellipsis-vertical');
const closeIcon = document.querySelector('.fa-xmark');
const leftMainDiv = document.querySelector('.leftMain_div');

ellipsisIcon.addEventListener('click', function () {
  leftMainDiv.style.display = 'block';
});

closeIcon.addEventListener('click', function () {
  leftMainDiv.style.display = 'none';
});



const faBars = document.querySelector('.bars_div');
const crossIcon = document.querySelector('.close_bar');
const mainMenu = document.querySelector('.menubar_content');

faBars.addEventListener('click', function () {
  mainMenu.style.display = 'block';
});

crossIcon.addEventListener('click', function () {
  mainMenu.style.display = 'none';
});



function displayList(classNames) {
  classNames.forEach(className => {
    var list = document.querySelector('.' + className);
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  });
}
