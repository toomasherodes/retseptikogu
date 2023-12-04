// Kui kasutaja vajutab Enter klahvi pärast otsingukasti kirjutamist, suunatakse ta ümber recipeMenu.html lehele.
// Parameetri "search" väärtuseks antakse otsingukasti sisu.
const searchbar = document.getElementById('searchbar')
searchbar.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        window.location.href = "recipeMenu.html?search=" + e.target.value
    }
})

// koodi autor: Toomas Herodes