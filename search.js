function search() {
  // Get the search query from the input field
  var query = document.getElementById('searchInput').value;

  // Clear the previous search results
  var resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  // Perform your search algorithm here or use an external search API
  // For simplicity, let's assume we have a list of predefined links
  var links = [
    { title: 'Google', url: 'https://www.google.com' },
    { title: '1v1.lol', url: 'https://math-is-cool.netlify.app/1v1lol' },
    { title: 'GitHub', url: 'https://github.com' }
    // Add more links as needed
  ];

  // Filter the links based on the search query
  var filteredLinks = links.filter(function(link) {
    return link.title.toLowerCase().includes(query.toLowerCase());
  });

  // Display the search results
  filteredLinks.forEach(function(link) {
    var resultElement = document.createElement('a');
    resultElement.href = link.url;
    resultElement.textContent = link.title;
    resultsContainer.appendChild(resultElement);
  });
}
