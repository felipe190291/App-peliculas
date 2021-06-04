import {ADD_FAVORITES,REMOVE_FAVORITES,GET_DETAILS,GET_MOVIES} from "../actions/index"

const initialState={
    moviesLoaded:[],
    movieDetail:{},
    movieFavorite:[],

}

export default function rootReducer(state=initialState,action){
    switch (action.type) {
        case GET_MOVIES:
            return {...state,
            moviesLoaded:action.payload.Search}
        case GET_DETAILS:
            return {...state,
                movieDetail:action.payload} 
        case ADD_FAVORITES:
            return{...state,
                movieFavorite:[...state.movieFavorite,action.payload]
            };
        case REMOVE_FAVORITES:
            return {...state,
            movieFavorite:state.movieFavorite.filter(movie=>movie.id!==action.payload)
            };
        default:
          return  state;
    }
}