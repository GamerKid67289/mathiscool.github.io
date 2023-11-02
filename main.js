// Assuming you have a 'database' array of objects with 'title' and 'content' properties
const database = [
    { title: 'First Post', content: 'This is the content of the first post.' },
    { title: 'Second Post', content: 'Here is the content of the second post.' },
    { title: 'Third Post', content: 'Content of the third post goes here.' }
];

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = searchInput.value.toLowerCase();
    const matchingResults = database.filter(function(post) {
        return post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm);
    });

    displayResults(matchingResults);
});

function displayResults(results) {
    searchResults.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        searchResults.innerHTML = 'No results found.';
        return;
    }

    results.forEach(function(post) {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        searchResults.appendChild(postElement);
    });
}
