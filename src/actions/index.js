export const GET_MOVIES="GET_MOVIES"
export const GET_DETAILS="GET_DETAILS"
export const ADD_FAVORITES="ADD_FAVORITES"
export const REMOVE_FAVORITES="REMOVE_FAVORITES"

export const getMovies =(titulo)=> async (dispatch) => {
  const request = await fetch(`http://www.omdbapi.com/?apikey=20dac387&s=${titulo}`);
const data= await request.json();
dispatch({
    type:GET_MOVIES,
    payload:data,
})
};
export const getMovieDetails =(id)=> async (dispatch) => {
    const request = await fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`);
  const data= await request.json();
  dispatch({
      type:GET_DETAILS,
      payload:data,
  })
  };
  export const addFavorite=(payload)=>({
    type:ADD_FAVORITES,
    payload, 
  });
  export const removeFavorites=(payload)=>({
    type:REMOVE_FAVORITES,
    payload, 
  });



