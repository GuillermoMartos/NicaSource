import React from "react";
import "./detail-card.sass";

function Detail({ movie }) {
  let stars = "";
  let i = movie?.rating?.toFixed(0);
  if (i == 0) stars += "🏳";
  while (i > 0) {
    stars += "⭐";
    i--;
  }

  const myStyle = {
    backgroundImage: `url(${movie.img})`,
    fontSize: "15px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "box-shadow": "rgba(99, 99, 99, 0.2) 0.5px 12px 12px 0.5px",
    "border-radius": "20px",
    "justify-self": "center",
    "background-color": "rgba(238, 238, 238, 0.274)",
    padding: "20px 20px",
    opacity: "0.99",
    position: "absolute",
    "z-index": -1,
  };

  return (
    <div id="move-div" style={myStyle} className="container-detail-card">
      <div className="card-detail">
        <button
          className="card-btn"
          onClick={() =>
            (document.getElementById("move-div").style.marginLeft = "-110%")
            (document.getElementById("move-cdiv").style.marginLeft = "-110%")
          }
        >
          X
        </button>
        <h4 className="text-card-detail">Title</h4>
        <h1>{movie.title}</h1>
        <div className="parent-inner">
          <div className="vert-inner">
            <h4 className="text-card-detail">Release date</h4>
            <h4>{movie.year}</h4>
          </div>
          <div className="vert-inner">
            <h4 className="text-card-detail">Rating</h4>
            <h2>{movie.rating}</h2>
          </div>
          <p>👁‍🗨 Votes: {movie.votes}</p>
        </div>
        <h4 className="text-card-detail">Review</h4>
        <p>{movie.overview}</p>
        <h4 className="text-card-detail">
          Original language: {movie.language}
        </h4>
        <p>{stars}</p>
        {/* <img src={movie.img}
        alt={movie.title}
        width="50%"
        /> */}
        <img src={movie.back_img} alt={`${movie.title}_back`} width="50%" />
      </div>
    </div>
  );
}

export default Detail;
