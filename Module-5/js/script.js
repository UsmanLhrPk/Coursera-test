document.addEventListener("DOMContentLoaded",
 	function (event) {	

		function sayHello (event,) {
				var message = "<h2>Hello " + name + "!</h2>";

			i++;
			console.log(this);
			var name = document.getElementById("name").value;
				document
				.getElementById("content")
				.innerHTML = message;

				if (name === "student") {
					var title = 
					document
						.querySelector("#title")
						.textContent;
					title += " & Lovin' it!";
					document
					.querySelector("h1")
					.textContent = title;

					if(i >= 5 && i < 10) {

						document
							.querySelector("h1")
							.textContent;

							title = "ENOUGHHHHHHHH!";
						document
							.querySelector("h1")
							.textContent = title;

						document
							.querySelector("title")
							.textContent = "For ALLAH's Sake Please!"

						document
							.getElementById("content")
							.innerHTML += "<h2> I know its you Usman! Go get a life you fool. Stop wasting your enrgy....</h2>";

					}

					if (i >= 10) {
						document.querySelector("button").disabled = true;

						document
							.querySelector("h1")
							.textContent;

							title = "Warned ya bro!";
						document
							.querySelector("h1")
							.textContent = title;

						document
							.querySelector("title")
							.textContent = "No Option Except RELOAD!"

						document
							.getElementById("content")
							.innerHTML = "<h2>Good day S.T.U.D.E.N.T!</h2>";

					}
				}
		}
		var i = 0;

		document.querySelector("button").onclick = sayHello;
 	}

);