/*
Javascript kood, mis leiab parameetri "search" põhjal otsingu ja sisestab
failist data.json leitud vasted lehele recipeMenu.html
*/


async function insertContent() {
    // Parameetri "search" ja data.json andmete leidmine 
    const params = new URLSearchParams(window.location.search);
    const search = params.get('search');
    const jsonData = await fetch('./data.json')
    const data = await jsonData.json()

    // Otsingusõna leidmine retseptidest
    result = []
    for (x in data){
        if(data[x].Valmistamine.toLowerCase().includes(search.toLowerCase()) || data[x].Kategooria.toLowerCase().includes(search.toLowerCase())){
            result.push(data[x])
        }
    }

    // Leitud retseptide lisamine addHTML muutujasse
    addHTML = ""
    result.forEach(element => {
        addHTML += `
        <div class="recipe_background ">
            <div class="title">` + element.Nimi + `
                <br>
                <span class="tekst">`+element.Tutvustus + ` </span>
            </div>
            <a class="recipe_button" href="./recipe.html?id=`+element.ID+`">
                <p class="text">Valmistama →</p>
            </a>
        </div>
        `
    });
    // addHTML muutuja sisu lisamine lehele. Kui see on tühi, lisatakse teade retseptide mitte leidmise kohta
    if(addHTML != ""){document.getElementById("main_container").innerHTML += addHTML}
    else{document.getElementById("main_container").innerHTML += '<h1 class="notFoundText">Selle märksõnaga retsepte ei leitud</h1>'}
}

// Retseptide otsimine ja lisamine pärast lehe laadimist
Window.onload = insertContent();

// koodi autor: Toomas Herodes