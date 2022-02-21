import "./App.sass";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card/card-movie";
import Login from "./components/Log-In/login";
import Footer from "./components/Footer/Footer";
import Detail from "./components/Detail/detail-card";
import Comments from "./components/Comments/comments";
import { useSelector } from "react-redux";
import Register from "./components/Register/register";
import { setLoad } from "./components/actions/indexActions";
import { useDispatch } from "react-redux";

function App() {
  let API_KEY = "5f5080d64c0c82542f3fded404131aff";
  var dispatch = useDispatch();
  let [search, setSearch] = useState("");
  // let [load, setLoad] = useState([]);

  const movie = useSelector((state) => state.movie);
  const load = useSelector((state) => state.load);

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        dispatch(setLoad(response.data.results));
      })
      .catch(function (error) {
        return alert("unhable to get movie right now, please try again later");
      });
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function getHottest() {
    axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        dispatch(setLoad(response.data.results));
      })
      .catch(function (error) {
        return alert("unhable to get movie right now, please try again later");
      });
  }

  async function searchMovie(e) {
    e.preventDefault();
    if (search.trim() === "")
      return alert("please submit any text to match films");
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      )
      .then((response) => {
        setSearch("");
        dispatch(setLoad(response.data.results));
      })
      .catch(function (error) {
        alert("unhable to search movie, please try again later");
      });
  }


  function closeTutorial(){
    document.getElementById("tutorial-move").style.marginLeft="-100%"
  }

  return (
    <div className="body-container">
      <div className="log-form">
        <Login></Login>
      </div>
      {!localStorage.getItem("NicaMovieUser") ? (
        <div id="tutorial-move" className="tutorial-cont">
          <h3>Initial tutorial</h3>
          <button className="search-bar-btn" onClick={()=>closeTutorial()}>X</button>
          <iframe
            src="https://player.vimeo.com/video/679854227?h=1072017504&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="300"
            height="250"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="NicaMovies Tutorial"
          ></iframe>
         
        </div>
      ) : null}
      <div className="searchbar">
        <form className="searchform" onSubmit={(e) => searchMovie(e)}>
          <input
            className="input-searchbar"
            type="text"
            name="movie"
            placeholder="search by movie..."
            value={search}
            onChange={(e) => handleChange(e)}
          ></input>
          <button className="search-bar-btn" type="submit">
            Search!
          </button>
        </form>
        <button className="search-bar-btn" onClick={() => getHottest()}>
          View Hottest!
        </button>
      </div>
      <div className="not-found">
        {load && load?.length == 0 ? (
          <div className="child-not-found">
            <img src="http://i.stack.imgur.com/SBv4T.gif"></img>
            <h1>ooops, nothing to see here... try another search!</h1>
          </div>
        ) : null}
      </div>
      <Register></Register>
      <div className="detail-load">
        {movie?.length > 2 ? (
          <div>
            <Detail movie={movie}></Detail>
            <Comments movie={movie}></Comments>
          </div>
        ) : (
          <div>
            <Detail movie={movie}></Detail>
            <Comments movie={movie}></Comments>
          </div>
        )}
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
