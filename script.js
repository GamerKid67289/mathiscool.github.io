function search() {
  var searchQuery = document.getElementById("search-input").value;
  // Here you can perform a search using the searchQuery.
  // You can fetch data from an API or perform a search on a predefined dataset.

  // For simplicity, let's just display some static search results.
  var searchResults = [
      "Result 1",
      "Result 2",
      "Result 3",
      "Result 4"
  ];

  var resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = ""; // Clear previous results

  searchResults.forEach(function(result) {
      var resultElement = document.createElement("p");
      resultElement.textContent = result;
      resultsContainer.appendChild(resultElement);
  });
}
