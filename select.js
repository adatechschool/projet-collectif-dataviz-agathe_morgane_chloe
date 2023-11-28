// afficher la liste des marques


// récupérer le choix de marque


/*
//récupérer la liste des catégories associées à la marque
const requestCat = async () => {
    const url = "https://world.openfoodfacts.net/api/v2/search?brands_tags=ferrero";
    const response = await fetch(url);
    const categories = await response.categories.json();
    console.log(categories);
*/
const categories = ["Snacks", "Chocolats", "Chocolats noirs", "Bars", "Pâtes à tartiner"]

// alimenter le 2e select avec les catégories
// récupérer le select
const selectCat = document.getElementById("cat-select");
// créer une option du select par catégorie
for (i = 0; i < categories.length; i++) {
    const option = document.createElement("option");
    option.text = categories[i];
    selectCat.add(option)
}
