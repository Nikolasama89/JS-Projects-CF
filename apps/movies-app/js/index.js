// $(function () {

//   let debounceTimeout = null
//   $("#searchInput").on("input", function() {
//     clearTimeout(debounceTimeout)
//     debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500)
//   })

//   $("#showMore").on("click", function(e) {
//     e.preventDefault();
//     onShowMoreClicked();
//   })
// })

// changed project from jquery to vanilla js
document.addEventListener("DOMContentLoaded", function () {

  let debounceTimeout = null;
  const searchInput = document.getElementById("searchInput")
  const showMore = document.getElementById("showMore")

  searchInput.addEventListener("input", function () {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500)
  });

  showMore.addEventListener("click", function(e) {
    e.preventDefault();
    onShowMoreClicked();
  })
});

let movieData = {};

const getMovie = async (title) => {
  // const apiKey = "b7c16c10"
  try {
    console.log("Searching for:", title)
    let response = await axios.get(`http://localhost:3000/movies?title=${title}`, {
      params : {
        t: title
      }
    });
    console.log("API Response: ", response.data)
    movieData = response.data;
    let moviePoster = response.data.Poster
      
    let movieImg = document.getElementById("image")
    movieImg.src = moviePoster


    document.getElementById("title").innerHTML = movieData.Title;
    document.getElementById("year").innerHTML = `Έτος παραγωγής: ${response.data.Year}`
    document.getElementById("runtime").innerHTML = `Διάρκεια: ${response.data.Runtime}`
    document.getElementById("genre").innerHTML = `Είδος: ${response.data.Genre}`
    document.getElementById("imdbRating").innerHTML = response.data.imdbRating
    document.getElementById("plot").innerHTML = response.data.Plot

    document.getElementById("movie").classList.remove("hidden")
  } catch (error) {
      console.error("Error fetching Movie", error.message)
      document.getElementById("error").classList.remove("hidden")
    }
  };
    
const onShowMoreClicked = () => {
    document.getElementById("director").innerHTML = `Σκηνοθεσία: ${movieData.Director}`;
    document.getElementById("actors").innerHTML = `Ηθοποιοί: ${movieData.Actors}`;
    document.getElementById("production").innerHTML = `Παραγωγή: ${movieData.Production}`;
    document.getElementById("boxOffice").innerHTML = `Box Office: ${movieData.BoxOffice}`;
    document.getElementById("language").innerHTML = `Γλωσσα: ${movieData.Language}`;
    document.getElementById("rated").innerHTML = `Καταλληλότητα: ${movieData.Rated}`;

    // document.getElementById("extraInfo").classList.remove("hidden")
    // Toggles the extraInfo id when user press it 
    let extraInfoElement = document.getElementById("extraInfo")
    extraInfoElement.classList.toggle("hidden")
}

