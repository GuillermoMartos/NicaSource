import React from "react";
import "./card-movie.sass"
import { useDispatch } from "react-redux";
import { setMovie } from "../actions/indexActions";


function Card({  title, year, rating, 
  overview, img, id, votes,back_img, language}) {
  img="https://image.tmdb.org/t/p/w500"+img
  back_img="https://image.tmdb.org/t/p/w500"+back_img
  let movie={title, year, rating, overview, img, id, votes,back_img, language}
  let stars=""
  let i=rating.toFixed(0)
  if (i==0) stars+="🏳"
  while(i>0){
    stars+="⭐"
    i--
  } 
  var dispatch = useDispatch();

  function sendMovie(movie){
    
    if (!localStorage.getItem('NicaMovieUser'))return alert("Log IN first!")
    dispatch(setMovie(movie))
    document.getElementById('move-div').style.marginLeft='10%'
  }


  return (
    <div className="container-card">
      <div className="card">
        
        <h4 className="text-card">Title</h4>
        <h1>{title}</h1>
       <div className="iner-card">
        <h4 className="text-card">Release date</h4>
        <h4>{year}</h4>
        <h4 className="text-card">Rating</h4>
        <h2>{rating}</h2>
        </div>
        <p>{stars}</p>
        <img src={img}
        alt={title}
        width="50%"
        />
        <div className="actions">
          <button className="btn-del" onClick={() => {sendMovie(movie)}}>
            COMMENTS
          </button>

          {/* <Link to={`/edit/${id}`}> */}
          <button className="btn-del" onClick={() => {sendMovie(movie)}}>
            REVIEWS
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
