$(document).ready(function() {
	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i != 0) {
			$('ul').append('<li> Fizz</li>');
			// console.log("fizz");
		}
		else if (i % 5 == 0 && i != 0) {
			$('ul').append('<li> Buzz</li>');
			// console.log("buzz");
		}
		else {
			$('ul').append('<li>' + i  + '</li>');
			// console.log(i);
		}
	}
})
