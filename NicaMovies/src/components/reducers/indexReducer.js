import { TYPES } from "../actions/indexActions";

const initialState = {
  movie:[],
  load:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_MOVIE: {
      return {
        ...state,
        movie:action.payload
      };
    }
    case TYPES.LOAD_HOME: {
      return {
        ...state,
        load:action.payload
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
