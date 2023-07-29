
var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "A body of mass 0.5 kg travels on straight line patth with velocity v = (3x2+ 4)m/s. The net workdone by the force during its displacement from x = 0 to x = 2 m is : ",		
		"options" : [
			{"a": "64 J", 
			 "b":"60 J", 
			 "c":"120 J", 
			 "d":"128 J",}
			],
		"answer":"60 J;",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Two charged particles, having same kinetic energy,are allowed to pass through a uniform magnetic field perpendicular to the direction of motion. If the ratio of radii of their circular paths is 6 : 5 and their respective masses ratio is 9 : 4. Then, the ratio ",
		"options" : [
			{"a": "8:5", 
			 "b":"4:5", 
			 "c":"5:4",
			 "d":"5:8",}
			],
		"answer":"5:4",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "In AM modulation, a signal is modulated on a carrier wave such that maximum and minimum amplitude are found to be 6V and 2V respectively. The modulation index is ",
		"options" : [
			{"a": "100%", 
			 "b":"80%", 
			 "c":"50%",
			 "d":"60%",}
			],
		"answer":"60%",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "The electric current in a circular coil of 2 turns produces a magnetic induction B1 at its centre. The coil is unwound and is rewound into a circular coil of 5 turns and the same current produces a magnetic induction B2 at its centre. The ratio of B2/B1 is",
		"options" : [
			{"a": "5/2", 
			 "b":"25/4",
			 "c":"5/4",
			 "d":"25/2",
			}
			],
		"answer":"25/4",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Two billiard balls of mass 0.05 kg each moving in opposite directions with 10 ms–1 collide and rebound with the same speed. If the time duration of contact is t = 0.005 s, then what is the force exerted on the ball due to each other?",
		"options" : [
			{"a": "100 N", 
			 "b":"200 N",
			 "c":"300 N",
			 "d":"400 N",
			}
			],
		"answer":"200 N",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : " For an object placed at a distance 2.4 m from a lens, a sharp focused image is observed on a screen placed at a distance 12 cm form the lens. A glass plate of refractive index 1.5 and thickness 1 cm is introduced between lens and screen such that the glass plate plane faces parallel to the screen. By what distance should the object be shifted so that a sharp focused image is observed again on the screen?",
		"options" : [
			{"a": "0.8 m", 
			 "b":"3.2 m",
			 "c":"1.2 m",
			 "d":"5.6 m",
			}
			],
		"answer":"3.2 m",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "When you walk through a metal detector carrying a metal object in your pocket, it raises an alarm. This phenomenon works on:",
		"options" : [
			{"a":"Resonance in ac circuits", 
			 "b":"Electromagnetic induction",
			 "c":"Mutual induction in ac circuits",
			 "d":"Interference of electromagnetic waves",
			}
			],
		"answer":"Resonance in ac circuits",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "The maximum error in the measurement of resistance, current and time for which current flows in an electrical circuit are 1%, 2% and 3% respectively. The maximum percentage error in the detection of the dissipated heat will be",
		"options" : [
			{"a": "2", 
			 "b":"4",
			 "c":"6",
			 "d":"8",
			}
			],
		"answer":"8",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : " A radio can tune to any station in 6 MHz to 10 MHz band. The value of corresponding wavelength bandwidth will be",
		"options" : [
			{"a": "4 m", 
			 "b":"20 m",
			 "c":"30 m",
			 "d":"50 m"
			}
			],
		"answer":"20 m",
		"score":0,
		"status": ""
	},

	{
		"id" : 10,
		"question" : "An object is taken to a height above the surface of earth at a distance (5/4)R from the centre of the earth. Where radius of earth, R = 6400 km. The percentage decrease in the weight of the object will be",
		"options" : [
			{"a": "36 %", 
			 "b":"50 %",
			 "c": "25 %", 
			 "d":"18 %",
			}
			],
		"answer":"36 %",
		"score":0,
		"status": ""
	}
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	



