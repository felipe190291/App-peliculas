import React from "react";
import { connect } from "react-redux";
import { removeFavorites } from "../../actions/index";
import "../Favoritos/favoritos.css";

const Favoritos = ({ movieFavorite, removeFavorites }) => {
  return (
    <div id="moviesList">
      {movieFavorite.map((moviet) => (
        <div className="movieCard">
          <img src={moviet.Poster} alt="" />
          <button className="fav" onClick={() => removeFavorites(moviet.id)}>
            ✖
          </button>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  movieFavorite: state.movieFavorite,
});

export default connect(mapStateToProps, { removeFavorites })(Favoritos);
