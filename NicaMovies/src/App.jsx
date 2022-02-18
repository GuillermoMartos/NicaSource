import "./App.sass";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card/card-movie";
import Login from "./components/Log-In/login";
import Footer from "./components/Footer/Footer";
import Detail from "./components/Detail/detail-card";
import { useSelector } from "react-redux";

function App() {
  let API_KEY = "5f5080d64c0c82542f3fded404131aff";
  let [search, setSearch] = useState("");
  let [load, setLoad] = useState([]);
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        setLoad(response.data.results);
      })
      .catch(function (error) {
        console.error({ error: error });
      });
  }, [movie]);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search.trim() === "")
      return alert("please submit any text to match films");
    axios
      .get(`https://omdbapi.com/?apikey=3f413535&t=${search}`)
      .then((response) => {
        setFind(response.data);
      })
      .catch(function (error) {
        console.error({ error: error });
      });
    console.log(load);
  }

  return (
    <div className="body-container">
      <div className="log-form">
        <Login></Login>
      </div>

      <div className="searchbar">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={search} onChange={handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>

      <div className="detail-load">
        {movie?.length > 2 ?
        <Detail movie={movie}></Detail>
        :
        <Detail movie={movie}></Detail>
        } 
      </div>

      <div className="main-load">
        {load &&
          load?.map((film) => {
            return (
              <Card
                id={film.id}
                votes={film.vote_count}
                title={film.title}
                year={film.release_date}
                rating={film.vote_average}
                overview={film.overview}
                img={film.poster_path}
                back_img={film.backdrop_path}
                language={film.original_language}
              ></Card>
            );
          })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
