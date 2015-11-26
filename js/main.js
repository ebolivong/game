// This coding was to display one random image at refresh

// var random_images_array = ['../img/cat1.png', '../img/cat2.png', '../img/cat3.png', '../img/cat4.png'];


// function getRandomImage(imgAr, path) {
// 	path = path || 'images/';
// 	var num = Math.floor( Math.random() * imgAr.length);
// 	var img = imgAr[ num ];
// 	var imgStr = '<img src="' + path + img + '" alt = ""';
// 	document.write(imgStr); document.close();
// }


//ask if each category of images should be made (cat, dog, other)

var catImage = [

'../img/cat1.png',

'../img/cat2.png',

'../img/cat3.png',

'../img/cat4.png',

];



// var levels = [     ]



function updateRandomImages() {
	var imageElements = $('img');
	$.each(imageElements, function(index, element) {
		displayRandomImage(element);
	});
}

function displayRandomImage(element) {
    var index = getRandomNumber(); 
    $(element).attr( 'src', imageList[index] );
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

$('button').click(function () {
    updateRandomImages();
});
s
//start off with some random images
updateRandomImages();

