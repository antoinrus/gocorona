'use strict';

const mainMenu = document.querySelector(".menu__body");
const iconMenu = document.querySelector(".icon-menu");

iconMenu.addEventListener('click', function (e) {
	if (mainMenu) {
		mainMenu.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	}
})