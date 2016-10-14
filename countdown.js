(function main(){

	var stop = false;

	setInterval(function() { 

		var numberSecond = parseInt($('#second').text(),10);
		var numberMinute = parseInt($('#minute').text(),10);
		var numberHour = parseInt($('#hour').text(),10);

		if (numberSecond > 0 && stop === false) {
			numberSecond--;
			$('#second').text(numberSecond);
		}
		else if (numberMinute > 0 && stop === false) {
			numberMinute--;
			$('#minute').text(numberMinute);
			$('#second').text('60');
		}
		else if (numberHour > 0 && stop === false) {
			numberHour--;
			$('#hour').text(numberHour);
			$('#minute').text('60');
			$('#second').text('60');
		}

	}, 1000);

	$('#btnStop').on('click', function() {
		if (stop === false) {
			stop = true;
		} else {
			stop = false;
		}
	})

	$('#btnReset').on('click', function(){

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
