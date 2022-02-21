import React from "react";
import "./comments.sass";
import { useState } from "react";
import axios from "axios";

function Comments({ movie }) {
  let stars = "";
  let i = movie?.rating?.toFixed(0);
  if (i == 0) stars += "🏳";
  while (i > 0) {
    stars += "⭐";
    i--;
  }

  var [opinion, setOpinion] = useState({
    comment: "",
    review: "",
  });
  var [allowReview, setAllowReview]=useState(false)
  var [allowComment, setAllowComment]=useState(false)

  function handleChange(e) {
    let value = e.target.value;
    if(e.target.name=="comment") setAllowComment(true)
    if(e.target.name=="review") setAllowReview(true)
    setOpinion({
      ...opinion,
      [e.target.name]: value,
    });
    console.log(opinion)
  }

  async function submitOpinion(e) {
    e.preventDefault();
    if(opinion.comment==null && opinion.review== null) return alert("no comment or review to retrieve")
    let time = new Date();
    var date = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} `;
    var data = {
      comment: opinion.comment==""? null : opinion.comment,
      review: opinion.review==""? null : opinion.review,
      username: localStorage.getItem("NicaMovieUser"),
      id_film: movie.id,
      date: date,
    };

    try {
      await axios
        .post(`http://localhost:8000/user/opinions/${movie.id}`, data)
        .then(async (res) => {
          await setOpinion({
            comment: "",
            review: "",
          });
          alert("thanks for your retrieve :)");
          return;
        });
    } catch (error) {
      console.log(error);
      return alert("please try again later, unhable to post now");
    }
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
    <div id="move-cdiv" style={myStyle} className="comment-detail-card">
      <div className="card-detail">
        <button
          className="card-btn"
          onClick={() =>
            (document.getElementById("move-div").style.marginLeft = "-110%")(
              (document.getElementById("move-cdiv").style.marginLeft = "-110%")
            )
          }
        >
          X
        </button>
        <h2>{movie.title}</h2>
        <h2 className="text-card-detail ">Comments</h2>
        
        <div className="scroll-box">
       
          {movie?.opinions &&
            movie?.opinions?.map((comments) => {
              if(comments.comment)return <p>🗨 {comments.username}: {comments.comment}</p>;
            })}
        </div>
        
        <div className="input-div">
          <label className="input-comment">make comment: </label>
          <form onSubmit={(e) => submitOpinion(e)}>
            <textarea
              onChange={(e) => handleChange(e)}
              name="comment"
              cols="43"
              rows="5"
              value={opinion.comment}
            ></textarea>
            <button disabled={!allowComment} type="submit">Send</button>
          </form>
        </div>

        <div className="parent-inner">
          <div className="vert-inner"></div>
          <div className="vert-inner"></div>
        </div>

        <h4 className="text-card-detail">
          <h2>Reviews</h2>
          <div className="scroll-box">
            {movie?.opinions &&
              movie?.opinions?.map((reviews) => {
                if(reviews.review)return <p>📃{reviews.username}: {reviews.review}</p>;
              })}
          </div>
          <div className="input-div">
            <form onSubmit={(e) => submitOpinion(e)}>
              <label for="input-review" className="input-comment">
                make review:{" "}
              </label>
              <textarea
                value={opinion.review}
                onChange={(e) => handleChange(e)}
                id="com"
                name="review"
                cols="43"
                rows="7"
              ></textarea>
              <button disabled={!allowReview} type="submit">Send</button>
            </form>
          </div>
        </h4>
        <p>{stars}</p>

        <img src={movie.back_img} alt={`${movie.title}_back`} width="50%" />
      </div>
    </div>
  );
}

export default Comments;
