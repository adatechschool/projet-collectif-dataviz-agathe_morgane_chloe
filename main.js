// select marques
const brands = ["Choisir une marque", "Ethiquable", "Milka", "Kaoka", "Kinder", "Bonnat", "Lindt", "Michel Cluizel"]
const categories = ["Choisir une catégorie", "Snacks", "Chocolats", "Chocolats noirs", "Bars", "Pâtes à tartiner"]


const selectBrands = () => {
	const selectBrand = document.getElementById("brand-select");
	for (let i = 0; i < brands.length; i++) {
		const option = document.createElement("option");
		option.text = brands[i];
		selectBrand.add(option)
	}
}

const selectCategories = () => {
	// select catégorie
	// récupérer le select
	const selectCat = document.getElementById("cat-select");
	// créer une option du select par catégorie
	for (let i = 0; i < categories.length; i++) {
		const option = document.createElement("option");
		option.text = categories[i];
		selectCat.add(option)
	}
}

selectBrands()
selectCategories()


const getValueBrand = () => {
	const selectBrandId = document.getElementById("brand-select");
	const brandChoice = selectBrandId.selectedIndex;
	const brandResult = selectBrandId.options[brandChoice].value;
	console.log("brand:", brandResult)
	return brandResult
}
const getValueCat = () => {
	const selectCatId = document.getElementById("cat-select");
	const catChoice = selectCatId.selectedIndex;
	const catResult = selectCatId.options[catChoice].value;
	console.log("category:", catResult)
	return catResult
}


const request = async () => {
	const valueBrand=getValueBrand();
	const valueCat=getValueCat();
	console.log("appel:",valueBrand, valueCat);
	const url = `https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v2/#get-/api/v2/search?brands_tag=${valueBrand}&categories_tags=${valueCat}&sort_by=nutriscore_score`;
	console.log(url);
	const datas = await fetch(url);
	const response = await datas.json();
	console.log(response)
}
//to do : limiter la requête à 5 meilleures réponses
// to do : gérer une image par défaut grâce à ??