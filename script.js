var question = ["The first “pre-computers” were powered by ____", 
				"The first computer programmer was ____", 
				"The first computer 'bug' was named after ____", 
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

var loadCard =function(cardIndex) {
	$('#front').text(question[cardIndex]);
	$('#back').text(answer[cardIndex]);
}

var loadProgress = function(cardIndex, totalCards) {
	var progressStr = "Currently on " + cardIndex + " of " + totalCards + " cards";
	$('#progress').text(progressStr);
}

var cardFlip = function() {
	$('#card').toggleClass('flipped');
}

$(function() {

	// Loading the first card
	loadCard(0);
	
	// Loading initial progress
	loadProgress(1, question.length);
	
	// Card flip event
	$('#card').click(cardFlip);
	
	var cardIndex = 1;
	$("#btn").click(function() {
		if ($('#card').hasClass('flipped')) {
			$('#card').removeClass('flipped');
			setTimeout(function() {
				loadCard(cardIndex);
			}, 200);
		} else {
		loadCard(cardIndex);	
		};
		
		loadProgress(++cardIndex,question.length);
		
		if (cardIndex === question.length) {
			cardIndex = 0;
		}
	})
})

