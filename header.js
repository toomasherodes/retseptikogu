/*
Javascript fail, mis lisab lehele headeri ja footeri.
Headeri ja footeri stiilid määrab global.css.
*/

// div klassinimega "header"
var x = document.createElement("div");
x.setAttribute("class", "header");

// pildi kaustast "pictures" klassinime ja id-ga "logo" lisamine headerisse
var y = document.createElement("img");
y.setAttribute("src", "./pictures/logo.png");
y.setAttribute("class", "logo");
y.setAttribute("id", "logo");
x.appendChild(y);

// headeri lisamine lehe algusesse
document.body.insertBefore(x, document.body.firstChild);

// footeri klassinimega "footer" ja sisuga "2023" lisamine lehe lõppu
document.body.innerHTML += '<div class="footer"> 2023 </div>';

// logo klikkimisel suunamine esilehele
var u = document.getElementById("logo");
u.addEventListener("click", function (i) {
  window.location.replace("./index.html");
});

// koodi autor: Toomas Herodes
