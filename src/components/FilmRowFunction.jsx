import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FilmRowFunction({ handleError, search }) {
  const [filmImages, setfilmImages] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const networkError = () => {
    handleError({ error: true, errorMessage: "errore di rete" });
  };

  const readFilms = async (search) => {
    setisLoading(true);
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=d60fa7a1&s=" + search
      );
      if (response.ok) {
        const data = await response.json();
        if (data["Response"] === "False") {
          setisLoading(false);
          networkError();
        } else {
          setfilmImages(data["Search"].slice(0, 6));
          setisLoading(false);
          handleError({ error: true, errorMessage: "errore di rete" });
          handleError({
            error: false,
            errorMessage: "",
          });
        }
      } else {
        setisLoading(false);
        networkError();
      }
    } catch (error) {
      setisLoading(false);
      networkError();
      console.error("ERRORE!", error);
    }
  };

  useEffect(() => {
    readFilms(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="container-fluid">
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6">
        {isLoading && (
          <div className="text-center mb-2">
            <Spinner animation="border" variant="info" />
          </div>
        )}
        {filmImages.map((film) => {
          return (
            <div className="col gx-1" key={film.imdbID}>
              <Link to={"/movie-detail/" + film.imdbID}>
                <img src={film["Poster"]} alt="" className="w-100" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
