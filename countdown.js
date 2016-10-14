(function main(){

	var t = 65;

	var interval = setInterval(function(){
		t--;
		var minutes = Math.floor(t/60);
		var secondes = t % 60;
		
		showTime(minutes, secondes);

	},1000);

	$('#btnReset').on('click', function(){
		clearInterval(interval);
		var minutes = '00';
		var secondes = '00';
		$('h1').text(minutes + ':' + secondes);

	});

	$('#btnInput').on('click', function() {
		var inputMinute = parseInt($('#inputMinute').val(),10);
		var inputSecond = parseInt($('#inputSecond').val(),10);

		t = inputMinute * 60 + inputSecond;
	});

	function showTime(m, s) {
		if (m < 10 && s < 10) {
			$('h1').text('0' + m + ':' + '0' + s);			
		}
		else if (m < 10) {
			$('h1').text('0' + m + ':' + s);			
		}
		else if (s < 10) {
			$('h1').text(m + ':' + '0' + s);						
		}
		else {
			$('h1').text(m + ':' + s);									
		}
	}

})();
