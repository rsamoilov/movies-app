import React from "reactn";
import PropTypes from "prop-types";
import MovieRecord from "records/movie-record";

function formatMoney(amount) {
  return amount.toLocaleString("en-US");
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

export default function Properties(props) {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>Budget</td>
          <td>${formatMoney(props.movie.budget)}</td>
        </tr>
        <tr>
          <td>Revenue</td>
          <td>${formatMoney(props.movie.revenue)}</td>
        </tr>
        <tr>
          <td>Release Date</td>
          <td>{formatDate(props.movie.releaseDate)}</td>
        </tr>
      </tbody>
    </table>
  );
}

Properties.propTypes = {
  movie: PropTypes.instanceOf(MovieRecord)
};
