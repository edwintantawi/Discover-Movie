import './component/card-item.js';
// import './owlCaraousel.js';
// import './owl-caraousel/owl.carousel.min.js';
const cardList = document.querySelector('.card-list');
const inputSearch = document.querySelector('#input-search');
const btnSearch = document.querySelector('#btn-search');


// BASE URL
const baseURL = 'https://api.themoviedb.org/3';
const keyAPI = '?api_key=3912a06fb200b29e4e15a494a4d6e733';



// RENDER
const render = (movies) => {

  // cardList.innerHTML = '';

  movies.forEach(movie => {
    if (movie.poster_path == null || movie.poster_path == 'null') {
      // skip no poster
    } else {
      // const cardItem = document.createElement('card-item');
      // cardItem.detail = movie;
      // cardItem.classList.add('owl-item');
      // cardList.appendChild(cardItem);
      cardList.innerHTML += `

        <div class="card-item">
          <img class="image" src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
          <img src="/src/assets/images/eye.svg" class="view-ico">
        </div>
      `;


    }
  })

}

// GET MOVIE  
const getMovie = async function () {
  const response = await fetch(`${baseURL}/discover/movie${keyAPI}`);
  const responseJson = await response.json();
  if (responseJson.error) {
    alert('error')
  } else {
    render(responseJson.results)
  }
}


// SEARCH
const search = async (keyword) => {
  const response = await fetch(`${baseURL}/search/multi${keyAPI}&query=${keyword}`);
  const responseJson = await response.json();
  if (responseJson.error) {
    alert('error')
  } else {
    render(responseJson.results);
  }
}

// SEARCH TOGGLE
btnSearch.addEventListener('click', function (e) {
  e.preventDefault();
  search(inputSearch.value);
})






















getMovie();