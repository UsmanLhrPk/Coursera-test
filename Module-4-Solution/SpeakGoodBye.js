/*********************** SPEAKGOODBYEFUNCTION FILE *************************
* Name : Usman Javaid                                                      *
* Date : December 14th, 2018                                               *
* Course: HTML, CSS and JS Web Development                                 *
* Instructor: Yaakov Chaikin                                               *
* Assignement: Module 4                                                    *
*                                                                          *
**************---------------*****************---------------**************/

(function (window) {

	var speakWord = "Good Bye";

	function speak(name) {
	  console.log(speakWord + " " + name);
	}

	var byeSpeaker = speak;
	window.byeSpeaker = byeSpeaker;

})(window);

