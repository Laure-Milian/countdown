(function main(){

	setInterval(function() { 

		var number = parseInt($('h1').text(),10);
		console.log(typeof number);

		if(number > 0) {

			number--;
			$('h1').text(number);
		}

	}, 1000);

// changer le text de h1

$('#reset').on('click', function(){

	$('h1').text('10');

});

})();