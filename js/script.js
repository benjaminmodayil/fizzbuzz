$(document).ready(function() {


	function count() {
		var number = prompt('What is your number?');
		if (number % 1 != 0) {
			return count();
		}
		var number = parseInt(number, 10);
		var number = +number;

		for (var j = 1; j <= number; j++) {

				if (j % 3 == 0) {
				            if (j % 5 == 0) {
				                $('ul').append('<li> FizzBuzz </li>');
				            } else {
				                $('ul').append('<li> Fizz</li>');
				            }

				    } else if (j % 5 == 0) {
				            if (j % 3 == 0) {
				                $('ul').append('<li> FizzBuzz </li>');
				            }
					     else {
				                $('ul').append('<li> Buzz</li>');
				            }
				        }

				        else {
				            $('ul').append('<li>' + j + '</li>');
				        }

			//     for (var i = 1; i <= 100; i++) {
			//         if (i % 3 == 0) {
			//             if (i % 5 == 0) {
			//                 $('ul').append('<li> FizzBuzz </li>');
			//             } else {
			//                 $('ul').append('<li> Fizz</li>');
			//             }
			//
			//         } else if (i % 5 == 0) {
			//             if (i % 3 == 0) {
			//                 $('ul').append('<li> FizzBuzz </li>');
			//             }
			// 	     else {
			//                 $('ul').append('<li> Buzz</li>');
			//             }
			//         }
			//
			//         else {
			//             $('ul').append('<li>' + i + '</li>');
			//         }
			//     }


			console.log(j);
		}
	}
	count();

//     for (var i = 1; i <= 100; i++) {
//         if (i % 3 == 0) {
//             if (i % 5 == 0) {
//                 $('ul').append('<li> FizzBuzz </li>');
//             } else {
//                 $('ul').append('<li> Fizz</li>');
//             }
//
//         } else if (i % 5 == 0) {
//             if (i % 3 == 0) {
//                 $('ul').append('<li> FizzBuzz </li>');
//             }
// 	     else {
//                 $('ul').append('<li> Buzz</li>');
//             }
//         }
//
//         else {
//             $('ul').append('<li>' + i + '</li>');
//         }
//     }
})
