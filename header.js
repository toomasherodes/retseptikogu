function addHeader() {
    var x = document.createElement("div");
    x.setAttribute("class", "header");
    var y = document.createElement("img")
    y.setAttribute("src", "/pictures/logo.png")
    y.setAttribute("class", "logo")
    y.setAttribute("id", "logo")
    x.appendChild(y)
    document.body.insertBefore(x, document.body.firstChild)

    document.body.innerHTML += '<div class="footer"> 2023 </div>'

    const u = document.getElementById("logo")
    u.addEventListener("click", function(i) {
        window.location.replace("index.html");
      });    


 }

Window.onload = addHeader();