/*********************** SPEAKHELLO FUNCTION FILE **************************
* Name : Usman Javaid                                                      *
* Date : December 14th, 2018                                               *
* Course: HTML, CSS and JS Web Development                                 *
* Instructor: Yaakov Chaikin                                               *
* Assignement: Module 4                                                    *
*                                                                          *
**************---------------*****************---------------**************/

(function (window) {

	var speakWord = "Hello";

	function speak (name) {
  		console.log(speakWord + " " + name);
	}

	var helloSpeaker = speak;
	window.helloSpeaker = helloSpeaker;

})(window);

