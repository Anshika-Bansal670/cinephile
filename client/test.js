const API_KEY = "a892193e2d4e53127eba4876484f3c0e";

fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
  .then((res) => res.json())
  .then((data) => console.log(data.title))
  .catch((err) => console.error(err));