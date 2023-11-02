// Sample database with search results
const database = [
    { title: "1v1 lol", url: "https://1v1.lol" },
    { title: "Tutorial 2", url: "https://example.com/tutorial-2" },
    { title: "Blog Post 1", url: "https://example.com/blog-1" },
    { title: "Blog Post 2", url: "https://example.com/blog-2" }
  ];
  
  function search() {
    // Clear previous results
    document.getElementById("searchResults").innerHTML = "";
  
    // Get search query
    const query = document.getElementById("searchInput").value.toLowerCase();
  
    // Search database for matching titles
    const results = database.filter(item => item.title.toLowerCase().includes(query));
  
    // Display search results
    results.forEach(item => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.title;
      link.target = "_blank"; // Opens link in a new tab/window
      document.getElementById("searchResults").appendChild(link);
      document.getElementById("searchResults").appendChild(document.createElement("br"));
    });
  }
  