import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovieDetails } from "../../actions/index";

const Detail = ({ movieDetail, getMovieDetails, match }) => {
  useEffect(() => {
    const matchId = match.params.id;
    getMovieDetails(matchId);
  }, []);

  return (
    <div>
      <h3>{movieDetail.Title}</h3>
      <h3> {movieDetail.Year} </h3>
      <img width="130px" src={movieDetail.Poster} alt="movie" />
    </div>
  );
};
const mapStateToProps = (state) => ({
  movieDetail: state.movieDetail,
});
export default connect(mapStateToProps, { getMovieDetails })(Detail);
