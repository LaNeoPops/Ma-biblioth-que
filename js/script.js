// BOUTONS PAGES D'ACCUEIL

let non = document.getElementById("non");
let oui = document.getElementById("oui");

oui.addEventListener('click', function () {
    document.getElementById("click").innerHTML = "Alors qu'est-ce que tu attends pour cliquez sur un des éléments du menu !";
    setTimeout(function () {
        document.getElementById("click").innerHTML = "";
    }, 3000);
});

non.addEventListener('click', function () {
    document.getElementById("click").innerHTML = "Oh non ! Tu as cliqué sur le mauvais bouton : essaie l'autre !";
    setTimeout(function () {
        document.getElementById("click").innerHTML = "";
    }, 4000);
});

