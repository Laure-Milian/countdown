(function main(){

	var t = 932;

	var minutes = t/60;
	var secondes = t % 60;
	console.log(secondes);

	setInterval(function(){

		t--;
		console.log(t);

	},1000);


})();
