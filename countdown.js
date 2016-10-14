(function main(){

	var stop = false;

	setInterval(function() { 

		var numberSecond = parseInt($('#second').text(),10);
		var numberMinute = parseInt($('#minute').text(),10);
		var numberHour = parseInt($('#hour').text(),10);

		if (numberSecond > 0 && numberSecond < 10 && stop === false) {
			numberSecond--;
			$('#second').text('0' + numberSecond);
		}
		else if (numberSecond > 0 && stop === false) {
			numberSecond--;
			$('#second').text(numberSecond);	
		}
		else if (numberMinute > 0 && numberMinute < 10 && stop === false) {
			numberMinute--;
			$('#minute').text('0' + numberMinute);
			$('#second').text('60');
		}
		else if (numberMinute > 0 && stop === false) {
			numberMinute--;
			$('#minute').text(numberMinute);
			$('#second').text('60');
		}
		else if (numberHour > 0 && numberHour < 10 && stop === false) {
			numberHour--;
			$('#hour').text('O' + numberHour);
			$('#minute').text('60');
			$('#second').text('60');
		}
		else if (numberHour > 0 && stop === false) {
			numberHour--;
			$('#hour').text('O' + numberHour);
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

		var hour = $('#inputHour').val();
		var minute = $('#inputMinute').val();
		var second = $('#inputSecond').val();

		$('#hour').text(hour);
		$('#minute').text(minute);
		$('#second').text(second);

		if (hour < 10) {
			$('#hour').text('0' + hour);
		} 
		if (minute < 10) {
			$('#minute').text('0' + minute);
		} 
		if (second < 10) {
			$('#second').text('0' + second);
		}

		if (!$('#inputHour').val()) {
			$('#hour').text('00');
		}

		if (!$('#inputMinute').val()) {
			$('#minute').text('00');
		}

		if (!$('#inputSecond').val()) {
			$('#second').text('00');
		}

	});



})();
