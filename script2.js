// Function to fetch and display CSV data based on URL parameter
function fetchCSVAndDisplay() {
    if (true) {
        fetch('data.csv')
            .then(response => response.text())
            .then(data => {
                const rows = data.split('\n');
                let html = '';

                rows.forEach((row) => {
                    html += '<li>'
                    recepie = row.split('","')
                    console.log(recepie[0].split('"')[1])
                    link = "retsept.html?Id=" + recepie[0].split('"')[1]
                    html += '<a href="' + link + '">    ' + recepie[1]+  '</a>' 
                    html += '</li>' 


                })

            

                document.getElementById('links').innerHTML = html;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
}

// Call the function when the page is loaded
window.onload = fetchCSVAndDisplay;
