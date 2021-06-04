import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, getMovies } from "../../actions";
import "../Home/Home.css";
import lupa from "../../imgs/lupa.png.png";

export const Home = ({ addFavorite, getMovies, moviesLoaded }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = (e) => {
    getMovies(input);
  };
  return (
    <div>
      <div className="boton">
        <input type="text" placeholder="Movie" onChange={handleChange}></input>
        <button onClick={handleClick} className="submitBtn">
          <img src={lupa} width="30" heigth="30" alt="lupa" />
        </button>
      </div>
      <div id="Mov">
        {moviesLoaded.map((movie) => (
          <div className="Poster" key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                className="efect"
                width="130px"
                src={movie.Poster}
                alt="movie"
              />
            </Link>
            <button
              className="lindo"
              onClick={() =>
                addFavorite({
                  Title: movie.Title,
                  Year: movie.Year,
                  Poster: movie.Poster,
                  id: movie.imdbID,
                })
              }
            >
              ✔
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
});

export default connect(mapStateToProps, { addFavorite, getMovies })(Home);
