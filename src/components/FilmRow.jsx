import { Component } from "react";
import { Spinner } from "react-bootstrap";

class FilmRow extends Component {
  state = {
    filmImages: [],
    isLoading: false,
  };
  networkError() {
    this.props.handleError.setState({
      error: true,
      errorMessage: "errore di rete",
    });
  }

  readFilms = async (query) => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=d60fa7a1&s=" + query
      );
      if (response.ok) {
        const data = await response.json();
        if (data["Response"] === "False") {
          this.setState({ isLoading: false });
          this.networkError();
        } else {
          this.setState({ filmImages: data["Search"].slice(0, 6) });
          this.setState({ isLoading: false });
          this.props.handleError.setState({
            error: false,
          });
        }
      } else {
        this.setState({ isLoading: false });
        this.networkError();
      }
    } catch (error) {
      this.setState({ isLoading: false });
      this.networkError();
      console.error("ERRORE!", error);
    }
  };

  componentDidMount() {
    this.readFilms(this.props.query);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6">
          {this.state.isLoading && (
            <div className="text-center mb-2">
              <Spinner animation="border" variant="info" />
            </div>
          )}
          {this.state.filmImages.map((film) => {
            return (
              <div className="col gx-1" key={film.imdbID}>
                <img src={film["Poster"]} alt="" className="w-100" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FilmRow;
