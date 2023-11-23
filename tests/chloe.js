let title = document.getElementById("title")
let rate = document.getElementById("rate")
const getFilm = async () => {
    const data = await fetch("http://bechdeltest.com/api/v1/getMoviesByTitle?title=matrix")
    const response = await data.json()
    console.log(response)
    title.textContent = response.title
    rate.textContent = response.rating
}
getFilm()