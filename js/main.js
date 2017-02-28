(function(){



	var searchBtn = document.getElementById("search-btn");
	var randomBtn = document.getElementById("random-button");

	searchBtn.addEventListener("click", search);
	randomBtn.addEventListener("click", function() {
		var win = window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
		win.focus();
	});









function search() {

	var searchTerm = document.getElementById("search-term").value;

	alert(searchTerm);

}



})();