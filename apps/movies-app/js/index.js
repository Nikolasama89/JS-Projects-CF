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

const getMovie = async (title) => {
  const apiKey = "b7c16c10"
  try {
    console.log("Searching for:", title)
    let response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}`, {
      params : {
        t: title
      }
    });
    console.log("API Response: ", response.data)
    let data = response.data;
    let moviePoster = response.data.Poster
      
    let movieImg = document.getElementById("image")
    movieImg.src = moviePoster


    document.getElementById("title").innerHTML = response.data.Title;
    document.getElementById("year").innerHTML = `Έτος παραγωγής: ${response.data.Year}`
    document.getElementById("runtime").innerHTML = `Διάρκεια: ${response.data.Runtime}`
    document.getElementById("genre").innerHTML = `Είδος: ${response.data.Genre}`
    document.getElementById("imdbRating").innerHTML = response.data.imdbRating

    document.getElementById("movie").classList.remove("hidden")

    
  } catch (error) {
    console.error("Error fetching Movie", error.message)
    document.getElementById("error").classList.remove("hidden")
  }
};

