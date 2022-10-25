var hamburgerMenu = document.querySelector('#hamburger-menu');
var mobile = document.querySelector('.mobile');
var closeBtn = document.querySelector('#close-btn');

hamburgerMenu.addEventListener('click', function () {
	mobile.classList.toggle('mobile--active');
});
closeBtn.addEventListener('click', function () {
	mobile.classList.toggle('mobile--active');
});
