import axios from "axios"

export const TYPES={
    SET_MOVIE:"SET_MOVIE",
}

//set logged User
export const setMovie= function(movie){
  
    //axios al back para movie.id con user.id
    return function(dispatch){
        dispatch({type:TYPES.SET_MOVIE, payload:movie})
    }
}
