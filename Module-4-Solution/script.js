/****************************** MAIN SCRIPT FILE ***************************
* Name : Usman Javaid                                                      *
* Date : December 14th, 2018                                               *
* Course: HTML, CSS and JS Web Development                                 *
* Instructor: Yaakov Chaikin                                               *
* Assignement: Module 4                                                    *
*                                                                          *
**************---------------*****************---------------**************/

(function(window) {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (name in names) {

    var firstLetter = names[name][0];

    if (firstLetter ===  "J" || firstLetter === "j") {

      byeSpeaker(names[name]); 

    } 
    else {

      helloSpeaker(names[name]); 

    }
  }
})();
