var random_images_array = ['../img/cat1.png', '../img/cat2.png', '../img/cat3.png', '../img/cat4.png'];

function getRandomImage(imgAr, path) {
	path = path || 'images/';
	var num = Math.floor( Math.random() * imgAr.length);
	var img = imgAr[ num ];
	var imgStr = '<img src="' + path + img + '" alt = ""';
	document.write(imgStr); document.close();
}