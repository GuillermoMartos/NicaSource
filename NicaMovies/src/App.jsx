import "./App.css";
import axios from "axios";
import {useState} from "react";

function App() {
let [search, setSearch] = useState("")
 
function handleChange(e){
  setSearch(e.target.value)
}

function handleSubmit(e){
  e.preventDefault();
  if(search.trim()==="")return alert("please submit any text to match films")
  const options = {
    method: 'GET',
    url: `https://data-imdb1.p.rapidapi.com/movie/imdb_id/byTitle/${search.trim()}/`,
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

  return (
    <div>
      <h1>Hello Guille!</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <input type="text" value={search} onChange={handleChange}></input>
      <input type="submit"></input>
      </form>

    </div>
  );
}

export default App;
