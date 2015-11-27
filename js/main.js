var catImage = [
'img/cat1.png',
'img/cat2.png',
'img/cat3.png',
'img/cat4.png',
];

var dogImage = [
'img/dog1.png',
'img/dog2.png',
];

var otherImage = [
'img/hamster.png',
'img/octopus.png',
];



// var levels = [     ]


function myFunction() {

for (var c = 0; c < catImage.length; c++) {
	$('<img>').attr('src', catImage[c]).appendTo('#gamespace');
}

for (var d = 0; d < dogImage.length; d++) {
	$('<img>').attr('src', dogImage[d]).appendTo('#gamespace');
}

for (var o = 0; o < otherImage.length; o++) {
	$('<img>').attr('src', otherImage[o]).appendTo('#gamespace');
}

}

