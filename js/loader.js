
function load() {
    var loader = document.getElementById("loader");
    loader.style.display = "flex";
    var gifUrl = "./images/loader.gif" + "?nocache=" + Math.random(); // Ajoute un paramètre unique à l'URL du GIF pour éviter la mise en cache
    loader.innerHTML = "<img src='" + gifUrl + "' alt='Chargement...' />";
    setTimeout(function () {

        var op = 1;
        var timer = setInterval(function () {
            if (op <= 0.1) {
                clearInterval(timer);
                loader.style.display = 'none';
            }
            loader.style.opacity = op;
            loader.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.2;
        }
            , 20);

    }, 1200);
}

load();