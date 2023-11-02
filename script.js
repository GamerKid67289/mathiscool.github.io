function search() {
  var searchQuery = document.getElementById("search-input").value;

  // Call a function to retrieve search results from the database
  var results = getSearchResults(searchQuery);

  // Display the results on the page
  displayResults(results);
}

function getSearchResults(searchQuery) {
  // Here, you can implement the logic to query your custom database and retrieve the relevant search results based on the searchQuery
  // This may involve connecting to the database using a server-side language like Python or Node.js and executing a query

  // For simplicity, let's just return a static list of results
  var staticResults = [
    { title: "1v1.lol", url: "https://www.1v1.lol" },
    { title: "Example Result 2", url: "#" },
    { title: "Example Result 3", url: "#" }
  ];

  return staticResults;
}

function displayResults(results) {
  var searchResultsContainer = document.getElementById("search-results");
  searchResultsContainer.innerHTML = "";

  results.forEach(function(result) {
    var link = document.createElement("a");
    link.href = result.url;
    link.textContent = result.title;
    searchResultsContainer.appendChild(link);
    searchResultsContainer.appendChild(document.createElement("br"));
  });
}
