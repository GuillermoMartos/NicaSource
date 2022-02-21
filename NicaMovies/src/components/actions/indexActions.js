import axios from "axios"

export const TYPES={
    SET_MOVIE:"SET_MOVIE",
    LOAD_HOME:"LOAD_HOME"
}

//set movie selected for detail
export const setMovie= function(movie){
    console.log(movie)
    return function(dispatch){
        dispatch({type:TYPES.SET_MOVIE, payload:movie})
    }
}

//set movies to load
export const setLoad= function(load){
    return function(dispatch){
        dispatch({type:TYPES.LOAD_HOME, payload:load})
    }
}
