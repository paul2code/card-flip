var question = ["The first “pre-computers” were powered by ____", 
				"The first computer programmer was ____", 
				"The first computer “bug” was named after ____", 
				"First High Level Programming language was ____",
				"The first computer game was ____",
				"The first computer virus was written by ____",
				"The best programming language?"
			   ];

var answer = ["Steam", 
			  "Ada Lovelace, a British mathematician", 
			  "A Moth", 
			  "Fortran",
			  "Spacewar",
			  "Fred Cohen in 1983",
			  "JavaScript :-p"
			 ];

var initialProgressString = "Currently on 1 of " + question.length + " cards";

$(function() {

	// Loading the first card
	var i = 0;
	$('#front').text(question[i]);
	$('#back').text(answer[i]);
	
	// Loading initial progress
	$('#progress').text(initialProgressString);
	
	// Card flip event
	$('#card').click(function() {
		$('#card').toggleClass('flipped');
	});
	
	var i = 1;
	$("#btn").click(function() {
		if ($('#card').hasClass('flipped')) {
			$('#card').removeClass('flipped');
		};
		var q = question[i];
		var a = answer[i];
		setTimeout(function() {
		$('#front').text(q);
		$('#back').text(a);	
		}, 150);
		i++;
		var progressStr = "Currently on " + i + " of " + question.length + " cards";
		$('#progress').text(progressStr);
		if (i === question.length) {
			i = 0;
		}
})
})

