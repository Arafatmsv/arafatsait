document.addEventListener('DOMContentLoaded', function () {
	var btnCars = document.getElementById('btnCars');
	var btnShop = document.getElementById('btnShop');
	var btnService = document.getElementById('btnService');
	var btnContact = document.getElementById('btnContact');
	var btnAbout = document.getElementById('btnAbout');

	var carsInfo = document.getElementById('carsInfo');
	var shopInfo = document.getElementById('shopInfo');
	var serviceInfo = document.getElementById('serviceInfo');
	var contactInfo = document.getElementById('contactInfo');
	var aboutInfo = document.getElementById('aboutInfo');

	btnCars.addEventListener('click', function () {
		showInfo(carsInfo);
	});

	btnShop.addEventListener('click', function () {
		showInfo(shopInfo);
	});

	btnService.addEventListener('click', function () {
		showInfo(serviceInfo);
	});

	btnContact.addEventListener('click', function () {
		showInfo(contactInfo);
	});

	btnAbout.addEventListener('click', function () {
		showInfo(aboutInfo);
	});

	function showInfo(infoElement) {
		// Скрыть все информационные блоки
		var allInfos = document.querySelectorAll('.info');
		allInfos.forEach(function (element) {
			element.style.display = 'none';
		});

		// Показать выбранный информационный блок
		infoElement.style.display = 'block';
	}
});