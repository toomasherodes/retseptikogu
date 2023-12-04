async function insertContent() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('id');

    const jsonData = await fetch('./data.json')
    const data = await jsonData.json()

    result = data[search]

    document.getElementById("name").innerHTML = result.Nimi;
    document.getElementById("teaser").innerHTML = result.Tutvustus.toUpperCase();
    document.getElementById("time").innerHTML = result.Aeg + " min";


    const koostisosad = result.Koostisosad.split(",").map((ingredient) => "<li>"+ingredient+"</li>")
    koostisosad.forEach(element => {
        document.getElementById("ingredientList").innerHTML += element;
    });
    document.getElementById("guide").innerHTML = result.Valmistamine;
    document.getElementById("recipeImg").src= "./pictures/retseptipildid/"+ result.ID +".png"


}

Window.onload = insertContent();