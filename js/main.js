

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

		        }
		});


		searchResults();


}


// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

function searchResults() {

	var resultsSection = document.getElementById("results-section");

	var resultDiv = document.createElement("div");


	resultDiv.setAttribute("id", "test");

	resultDiv.style.width = "100px";
	resultDiv.style.height = "100px";
	resultDiv.style.background = "red";


	var para = document.createElement("p");
	var node = document.createTextNode("This should go here");
	para.appendChild(node);


	var element = document.getElementById("test");
    element.appendChild(para);

    console.log(element);




    alert('test');


}


	



// function search() {

// 	var searchTerm = document.getElementById("search-term").value;

// 	var xhr = new XMLHttpRequest();
// 	var json;




//     xhr.onreadystatechange = function() {

//         if (xhr.readyState === 4 && xhr.status === 200){

        	
//             json = JSON.parse(xhr.responseText);
//             console.log(json);
 


//         }

//     };

//     xhr.open("GET","https://en.wikipedia.org/w/api.php?action=query&titles=" + searchTerm + "&prop=revisions&rvprop=content&format=json"
// , true);
//     xhr.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );
//     xhr.send();



// }


// function search() {

// 	var searchTerm = document.getElementById("search-term").value;

// 	// Using XMLHttpRequest
// 	var xhr = new XMLHttpRequest();
// xhr.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );

// // Using jQuery
// $.ajax( {
//     url: "https://en.wikipedia.org/w/api.php?action=query&titles=" + searchTerm + "&prop=revisions&rvprop=content&format=json",
//     data: queryData,
//     dataType: 'json',
//     type: 'POST',
//     headers: { 'Api-User-Agent': 'Example/1.0' },
//     success: function(data) {
//        // do something with data
//        console.log(data);
//     }
// } );

// // Using mw.Api, specify it when creating the mw.Api object
// var api = new mw.Api( {
//     ajax: {
//         headers: { 'Api-User-Agent': 'Example/1.0' }
//     }
// } );
// // api.get( {...} ).done(function(data) {
// //     // do something with data
// // });

// }




})();   // End IIFE Main
