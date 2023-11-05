// Function to extract URL parameters
function getId(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    console.log(results[2].replace(/\+/g, " "))
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Function to fetch and display CSV data based on URL parameter
function fetchCSVAndDisplay() {
    var csvId = getId('Id');
    if (csvId) {
        fetch('data.csv')
            .then(response => response.text())
            .then(data => {
                const rows = data.split('\n');
                let html = '';

                const column = rows[csvId].split('","');
                html += '<h1>' + column[1] +  '</h1 >' 
                html += '<h4>' + column[2] +  '</h4 >' 

                html += '<img src=' + column[0] + '.png" class="picture" >'


                const ingredients = column[5].split(',')
                html += '<p> KOOSTISOSAD </p>'
                html += '<ul>'

                ingredients.forEach(ingredient => {
                    html += '<li>' + ingredient +  '</li >' 
                });
                html += '</ul>'


                html +='<p>'+ column[6] + '</p>';


                document.getElementById('csvContent').innerHTML = html;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        document.getElementById('csvContent').innerHTML = '<p>No CSV id specified in the URL parameters.</p>';
    }
}

// Call the function when the page is loaded
window.onload = fetchCSVAndDisplay;
