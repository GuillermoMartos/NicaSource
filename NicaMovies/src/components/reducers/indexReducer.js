import { TYPES } from "../actions/indexActions";

const initialState = {
  movie:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_MOVIE: {
      return {
        ...state,
        movie:action.payload
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
