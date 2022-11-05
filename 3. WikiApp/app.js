// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const searchInput = document.querySelector("#search");
const resultsDiv = document.querySelector(".results");

searchInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const searchKey = e.target.value;
    if (searchKey && searchKey.trim() !== "") {
        resultsDiv.innerHTML = ``;
      try {
        resultsDiv.innerHTML =
            "<h3>Searching...</h3>";
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchKey}`;

        const resultAPI = await fetch(url).then((response) => {
            console.log("🚀 ~ file: app.js ~ line 17 ~ resultAPI ~ response", response)
            if(!response.ok) throw new Error(`${response.status}`)
            return response.json()
        });
        console.log("🚀 ~ file: app.js ~ line 17 ~ searchInput.addEventListener ~ resultAPI", resultAPI)
        
        const searchResults = resultAPI.query.search;
        if (searchResults.length) {
          let html = "";
          searchResults.forEach((result) => {
            html += `<div class='result-container'><a class='result-title' target="_blank" href='https://en.wikipedia.org/?curid=${result.pageid}'>${result.title}</a><p class='result-link'>https://en.wikipedia.org/?curid=${result.pageid}</p><p class='result-text'>${result.snippet}</p></div>`;
          });
          resultsDiv.innerHTML = html;
        } else {
          resultsDiv.innerHTML =
            "<h3>Aucun résultat pour cette recherche.</h3>";
        }
      } catch (error) {
        resultsDiv.innerHTML = `<h3>${error}</h3>`;
      }
    }
  }
});
