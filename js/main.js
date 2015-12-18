var catImage = [
'img/cat1.gif',
'img/cat2.gif',
'img/cat3.gif',
'img/cat4.gif',
];

var dogImage = [
'img/dog1.gif',
'img/dog2.gif',
];

var otherImage = [
'img/whale.gif',
'img/octopus.gif',
];

// var levels = [     ]


// Start Button 
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

	for (var d = 0; d < dogImage.length; d++) {
	$('<img>')
		.attr('src', dogImage[d])
		.appendTo('#gamespace')
		.load(function() {
			var $i = $(this);
			$i.css({
				'left': Math.floor(Math.random()*($gs.width() - $i.width())) +'px',
				'top': Math.floor(Math.random()*($gs.height() - $i.height())) +'px'})

		});
	}

	var count = 6;

	var cattimer = function() {
		count--;
		$('.cattimer').text(count);
		if ( count <= 0) {
			// console.log("Game Over");
			$('img').addClass('hide');
			$('#guessscreen').removeClass('hide');
			clearInterval(timer);
		}
	};
	var timer = setInterval(cattimer, 1000);


});


// Guess Screen
 var inputQuantity = [];
    $(function() {
      $(".quantity").each(function(i) {
        inputQuantity[i]=this.defaultValue;
         $(this).data("idx",i); 
      });

      $(".quantity").on("keyup", function (e) {
        var $field = $(this),
            val=this.value,
            $thisIndex=parseInt($field.data("idx"),10);
        if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
            this.value = inputQuantity[$thisIndex];
            return;
        } 
        if (val.length > Number($field.attr("maxlength"))) {
          val=val.slice(0, 5);
          $field.val(val);
        }
        inputQuantity[$thisIndex]=val;

        if ( inputQuantity == catImage.length ) {
   			console.log("CORRECT!")
   		}
   		else {
   			console.log("WRONG :(")
   		}

   		});  
	});





