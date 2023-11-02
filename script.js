// Database of relevant searches
const database = [
  {
    title: "Full Stack Development",
    content: "Learn the skills necessary to become a full stack developer."
  },
  {
    title: "HTML",
    content: "Hypertext Markup Language, the standard markup language for documents designed to be displayed in a web browser."
  },
  {
    title: "CSS",
    content: "Cascading Style Sheets, a style sheet language used for describing the look and formatting of a document written in HTML."
  },
  {
    title: "JavaScript",
    content: "A high-level, interpreted programming language that enables interactive web pages and makes them dynamic."
  },
  // Add more relevant searches to the database as needed
];

function search() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  // Loop through the database and find matches
  for (let i = 0; i < database.length; i++) {
    const searchTitle = database[i].title.toLowerCase();
    const searchContent = database[i].content.toLowerCase();

    if (searchTitle.includes(searchTerm) || searchContent.includes(searchTerm)) {
      const resultDiv = document.createElement("div");
      resultDiv.className = "searchResult";
      resultDiv.innerHTML = `<h3>${database[i].title}</h3><p>${database[i].content}</p>`;
      resultsDiv.appendChild(resultDiv);
    }
  }

  if (resultsDiv.innerHTML === "") {
    resultsDiv.innerHTML = "No results found.";
  }
}
