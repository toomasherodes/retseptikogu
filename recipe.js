/*
Javascript kood, mis lisab recipe.html lehele parameetritest leitud ID põhjal retsepti sisu
*/

async function insertContent() {
    // Retsepti id leidmine parameetritest ja selle põhjal retsepti andmete leidmine
    const params = new URLSearchParams(window.location.search);
    const search = params.get('id');
    const jsonData = await fetch('./data.json')
    const data = await jsonData.json()
    result = data[search]

    // Retsepti nime, lühikirjelduse, ajakulu ja valmistamise juhendi sisestamine vastavatesse konteineritesse
    document.getElementById("name").innerHTML = result.Nimi;
    document.getElementById("teaser").innerHTML = result.Tutvustus.toUpperCase();
    document.getElementById("time").innerHTML = result.Aeg + " min";
    document.getElementById("guide").innerHTML = result.Valmistamine;


    // Retsepti koostisosade lisamine vastavasse nimekirja
    const koostisosad = result.Koostisosad.split(",").map((ingredient) => "<li>"+ingredient+"</li>")
    koostisosad.forEach(element => {
    document.getElementById("ingredientList").innerHTML += element;
    });

    // Retsepti pildi allika lisamine vastavalt retsepti ID-le
    document.getElementById("recipeImg").src= "./pictures/retseptipildid/"+ result.ID +".png"
}

// Retsepti lisamine pärast lehe laadimist
Window.onload = insertContent();

// koodi autorid: Toomas Herodes, Markus Nurmik