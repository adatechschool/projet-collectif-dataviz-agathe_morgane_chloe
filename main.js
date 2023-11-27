//to do : limiter la requête à 5 meilleures réponses

fetch('https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v2/#get-/api/v2/search?brands_tag=milka&categories_tags=chocolates&sort_by=nutriscore_score').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

// to do : gérer une image par défaut grâce à ??