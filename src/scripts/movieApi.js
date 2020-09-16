import './component/card-item.js'
const cardList = document.querySelector('.card-list');

// RENDER
const render = (movies) => {

  cardList.innerHTML = '';

  movies.forEach(movie => {
    console.log(movie);
    // const cardItem = document.createElement('card-item');
    // cardItem.detail = movie;
    cardList.innerHTML += `
    <div class="card-item">
              <img class="image" src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
              <div class="desc">
                <h3>${movie.title}</h3>
                <small>
                ${movie.release_date}
                </small>
              </div>
            </div>
    `;
  })

}

// GET MOVIE  
const getMovie = async function () {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3912a06fb200b29e4e15a494a4d6e733`);
  const responseJson = await response.json();
  if (responseJson.error) {
    alert('error')
  } else {
    render(responseJson.results)
  }
}
getMovie();