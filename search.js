function search() {
  // Get the search query from the input field
  var query = document.getElementById('searchInput').value;

  // Clear the previous search results
  var resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  // Perform your search algorithm here or use an external search API
  // For simplicity, let's assume we have a list of predefined links
  var links = [
    { title: 'Project Fun Unblocked Games', url: 'https://sites.google.com/view/project-fun2' }
    { title: 'Math Is Cool Unblocked Games', url: 'https://math-is-cool.netlify.app'}
    { title: 'Games 10x10 Unblocked Games', url: 'https://sites.google.com/view/games10x10'}
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
