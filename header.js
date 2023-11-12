function addHeader() {
    var x = document.createElement("div");
    x.setAttribute("class", "header");
    var y = document.createElement("img")
    y.setAttribute("src", "/pictures/logo.png")
    y.setAttribute("class", "logo")
    x.appendChild(y)
    document.body.insertBefore(x, document.body.firstChild)
 }

Window.onload = addHeader();