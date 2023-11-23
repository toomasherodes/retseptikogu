async function insertContent() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('id');

    const jsonData = await fetch('./data.json')
    const data = await jsonData.json()

    result = data[search]
    console.log(result)

    document.getElementById("name").innerHTML = result.Nimi;
    document.getElementById("teaser").innerHTML = result.Tutvustus.toUpperCase();

    const koostisosad = result.Koostisosad.split(",").map((ingredient) => "<li>"+ingredient+"</li>")
    console.log(koostisosad)
    koostisosad.forEach(element => {
        document.getElementById("ingredientList").innerHTML += element;
    });
    document.getElementById("guide").innerHTML = result.Valmistamine;


}

Window.onload = insertContent();