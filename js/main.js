

(function Main(){

	"use strict";





	var searchBtn = document.getElementById("search-btn");
	var randomBtn = document.getElementById("random-button");

	searchBtn.addEventListener("click", search);
	randomBtn.addEventListener("click", function() {
		var win = window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
		win.focus();
	});










function search() {

		var searchTerm = document.getElementById("search-term").value;



		//NEED TO RESEARCH MORE ABOUT JSONP AND CROSS SITE CALLS

		var apiUrl = "https://en.wikipedia.org/w/api.php";

		$.ajax({url: apiUrl,
		        dataType: 'jsonp',
		        jsonp: 'callback',
		        data: {action: 'opensearch',
		               search: searchTerm,
		               limit: 5,
		               format: 'json'},
		        success: function(response) {

		          // Now you have search results!
		          console.log(response);

		          searchResults(response);

		        }
		});


		


}


// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

function searchResults(termsArray) {





	// LOOP THROUGH TERMS TO DISPLAY THEM IN EACH TILE

	// CLEAR RESULTS AFTER NEW SEARCH



	var resultsTermArray = termsArray[1]; // This is an array
	console.log(resultsTermArray.length);

	var resultsDefinitionArray = termsArray[2];
	console.log(resultsDefinitionArray.length);

	console.log(resultsDefinitionArray);

	var resultsLinksArray = termsArray[3];




	var resultsSection = document.getElementById("results-section");

	var resultDiv = document.createElement("div");





	for (var i = 0; i < resultsTermArray.length; i++) { 
    	
			    // Create div element
				var newDiv = document.createElement("div");

				// Create h4 element
				var term = document.createElement("h4");

				var description = document.createElement("p");

				var link = document.createElement("a");

				link.href = resultsLinksArray[i];
				link.target = "_blank";
				link.innerHTML = "Read more..."


				// Add the h4 to the div tag
				newDiv.appendChild(term);

				// Add title term to div
				var termText = document.createTextNode(resultsTermArray[i]);

				term.appendChild(termText);

				newDiv.setAttribute("class", "result-tile");

				newDiv.appendChild(description);

				newDiv.appendChild(link);



				var newText = document.createTextNode(resultsDefinitionArray[i]);
				resultsSection.appendChild(newDiv);
				// newDiv.appendChild(newText);
				description.appendChild(newText);
	
	}










}





	





})();   // End IIFE Main
