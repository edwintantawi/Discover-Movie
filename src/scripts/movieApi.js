import './component/card-item.js';
// import './owlCaraousel.js';
// import './owl-caraousel/owl.carousel.min.js';
// const cardlist_recomendation = document.querySelector('.card-recomendation');
const inputSearch = document.querySelector('#input-search');
const btnSearch = document.querySelector('#btn-search');


// BASE URL
const baseURL = 'https://api.themoviedb.org/3';
const keyAPI = '?api_key=3912a06fb200b29e4e15a494a4d6e733';



// RENDER
const render = (movies, target) => {

  const targetElement = document.querySelector(`.${target}`);
  targetElement.innerHTML = '';

  movies.forEach(movie => {
    if (movie.poster_path == null || movie.poster_path == 'null') {
      // skip no poster
    } else {
      const cardItem = document.createElement('card-item');

      cardItem.detail = movie;
      cardItem.classList.add('owl-item');
      targetElement.appendChild(cardItem);
      // cardlist_recomendation.innerHTML += `

      //   <div class="card-item">
      //     <img class="image" src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
      //     <img src="/src/assets/images/eye.svg" class="view-ico">
      //   </div>
      // `;


    }
  })

}

// GET RECOMENDATION  
const getPopularMovie = async function () {
  const response = await fetch(`${baseURL}/movie/popular${keyAPI}`);
  const responseJson = await response.json();
  if (responseJson.error) {
    alert('error')
  } else {
    render(responseJson.results, 'card-popular-movie')
  }
}


// SEARCH
const search = async (keyword) => {
  const response = await fetch(`${baseURL}/search/multi${keyAPI}&query=${keyword}`);
  const responseJson = await response.json();
  if (responseJson.error) {
    alert('error')
  } else {
    render(responseJson.results, 'card-search');
  }
}

// SEARCH TOGGLE
const searchSection = document.querySelector('#search');

btnSearch.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputSearch.value == '') {
    searchSection.style.display = 'none';
    // alert('please insert keyword for search...');
  } else {
    searchSection.style.display = 'block';
    search(inputSearch.value);
  }
});
inputSearch.addEventListener('keyup', function (e) {
  // e.preventDefault();

  if (e.keyCode === 13) {

    if (inputSearch.value == '') {
      // alert('please insert keyword for search...');
      searchSection.style.display = 'none';
    } else {
      searchSection.style.display = 'block';
      search(inputSearch.value);
    }
  }

});


// GET TOP RATED MOVIE
const getTopRatedMovie = async () => {
  try {
    const response = await fetch(`${baseURL}/movie/top_rated${keyAPI}`);
    const responseJson = await response.json();
    render(responseJson.results, 'card-toprated-movie');
  } catch (error) {
    console.log(error);
  }
}























getPopularMovie();
getTopRatedMovie();