/* fetch('http://bechdeltest.com/api/v1/getMoviesByTitle?title=matrix').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
}); */

const listeFilms = document.getElementById('films');
const url = 'http://bechdeltest.com/api/v1/getMoviesByTitle?title=matrix';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let films = data.results;
  // pour chaque film, on crée un élément de liste
  return films.map(function(film) {
	//on crée les noeuds pour les détails des films
    let li = createNode('li');
    let span = createNode('span');
	let rating = createNode('rating')
	// on affiche dans le html
    span.innerHTML = `${film.title}`;
	rating.innerHTML = `${film.rating}`;
    append(li, span);
    append(li, rating);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});


//on crée les noeuds 
createNode = (element) => {
	return document.createElement(element);
}

append = (parent, el) => {
	return parent.appendChild(el);
}