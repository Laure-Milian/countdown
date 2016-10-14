(function main(){

	setInterval(function() { 

		var numberSecond = parseInt($('#second').text(),10);
		var numberMinute = parseInt($('#minute').text(),10);
		var numberHour = parseInt($('#hour').text(),10);

		if (numberSecond > 0) {
			numberSecond--;
			$('#second').text(numberSecond);
		}
		else if (numberMinute > 0) {
			numberMinute--;
			$('#minute').text(numberMinute);
			$('#second').text('60');
		}
		else if (numberHour > 0) {
			numberHour--;
			$('#hour').text(numberHour);
			$('#minute').text('60');
			$('#second').text('60');
		}

	}, 1000);


$('#reset').on('click', function(){

	$('#second').text('60');
	$('#minute').text('60');
	$('#hour').text('60');

});

$('#btnInput').on('click', function() {

	$('#hour').text($('#inputHour').val());
	$('#minute').text($('#inputMinute').val());
	$('#second').text($('#inputSecond').val());

});


})();
