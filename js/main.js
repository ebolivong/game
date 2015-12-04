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


$('button').on('click', function() {

	$(this).attr('disabled','disabled')

	$('#splashscreen').fadeOut(100);

    var $gs = $('#gamespace');

	for (var c = 0; c < catImage.length; c++) {
		$('<img>')
			.attr('src', catImage[c])
			.appendTo('#gamespace')
			.load(function() {
				var $i = $(this);
				$i.css({
					'left': Math.floor(Math.random()*($gs.width() - $i.width())) +'px',
					'top': Math.floor(Math.random()*($gs.height() - $i.height())) +'px'})
			});


		
	}


});



