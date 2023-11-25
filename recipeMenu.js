async function insertContent() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('search');

    const jsonData = await fetch('./data.json')
    const data = await jsonData.json()

    result = []
    for (x in data){
        if(data[x].Valmistamine.toLowerCase().includes(search.toLowerCase()) || data[x].Kategooria.toLowerCase().includes(search.toLowerCase())){
            result.push(data[x])
        }
    }

    addHTML = ""
    result.forEach(element => {
        addHTML += `
        <div class="recipe_background ">
            <div class="title">` + element.Nimi + `
                <br>
                <span class="tekst">`+element.Tutvustus + ` </span>
            </div>
            <a class="recipe_button" href="/recipe.html?id=`+element.ID+`">
                <p class="text">Valmistama →</p>
            </a>
        </div>
        `
    });
    if(addHTML != ""){document.getElementById("main_container").innerHTML += addHTML}
    else{document.getElementById("main_container").innerHTML += '<h1 class="notFoundText">Selle märksõnaga retsepte ei leitud</h1>'}
}

Window.onload = insertContent();