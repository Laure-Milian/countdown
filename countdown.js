(function main(){

	setInterval(function() { 

		var number = $('h1').text();
		number--;
		$('h1').text(number);

	}, 1000);

	

})();