const searchbar = document.getElementById('searchbar')

searchbar.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        console.log(e.target.value)
        window.location.href = "recipeMenu.html?search=" + e.target.value
    }
})