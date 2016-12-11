
function searchIMDB(query) {
  // http://www.omdbapi.com/?t=rocky&y=&plot=short&r=json
  $.getJSON('http://www.omdbapi.com/', {
    t: query,
    plot: "short",
    r: 'json' //these are parameters provided by OMDB. See the example URL above
  }, function(omdbData) {
    let results = omdbData;
    console.log("OMDB Data =>")
    // debugger //----- we can just jump into the code and 'freeze here to explore'
    console.log(results);
    if (omdbData.Response == "True"){
      renderMovie(omdbData);
    } else {
      renderError();
    }
  });
}

function renderMovie(data) {
  $('.result').show();
  $('#poster').attr("src", data.Poster);
  $('#title').html(data.Title);
  $('#year') .html(data. Year)
  $('#actors') .html(data. Actors)
  $('#awards') .html(data. Awards)
  $('#country') .html(data. Country)
  $('#director') .html(data. Director)
  $('#genre') .html(data. Genre)
  $('#language') .html(data. Language)
  $('#metascore') .html(data. Metascore)
  $('#plot') .html(data. Plot)
  $('#rated') .html(data. Rated)
  $('#release') .html(data. Release)
  $('#response') .html(data. Response)
  $('#runtime') .html(data. Runtime)
  $('#writer') .html(data. Writer)
  $('#imdbID') .html(data. imdbID)


}

function renderError() {
  $('.error').show();
}


$('#movie-search-form').on('submit', function(event) {
  event.preventDefault(); // this prevents the page from reloading again
  $('.result').hide();
  searchIMDB(this.query.value);
  this.query.value = '';
});
