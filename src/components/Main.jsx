import { Component } from "react";
import FilmRow from "./FilmRow";
import { Alert } from "react-bootstrap";

class Main extends Component {
  state = {
    error: false,
    errorMessage: "Errore",
  };
  render() {
    return (
      <main className="mb-5">
        <div id="buttom-nav" className="d-flex align-items-center d-block">
          <div id="b-nav-left" className="d-flex align-items-center">
            <h1 className="d-inline text-white">TV Shows</h1>
            <select
              name="filter"
              id="filter"
              className="text-white ms-5 py-1 px-2"
            >
              <option value="1">Genres</option>
              <option value="2">Filter 2</option>
              <option value="3">Filter 3</option>
            </select>
          </div>
          <div
            id="b-nav-right"
            className="d-flex flex-grow-1 justify-content-end"
          >
            <i className="bi bi-filter-left text-white me-0 border border-1 px-1"></i>
            <i className="bi bi-grid-fill text-white border border-1 px-1 ms-0"></i>
          </div>
        </div>
        {this.state.error && (
          <Alert variant="danger" className="text-center">
            {this.state.errorMessage}
          </Alert>
        )}
        <h3 className="text-white mt-3 mb-3 mt-5">Harry Potter</h3>
        <FilmRow query="Harry Potter" handleError={this} />
        <h3 className="text-white mt-3 mb-3">Ritorno al futuro</h3>
        <FilmRow query="back to the future" handleError={this} />
        <h3 className="text-white mt-3 mb-3">Il signore degli Anelli</h3>
        <FilmRow query="the lord of the rings" handleError={this} />
      </main>
    );
  }
}

export default Main;
