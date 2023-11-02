import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

export default function FilmRowFunction({ query, handleError }) {
  const [filmImages, setfilmImages] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const networkError = () => {
    handleError({ error: true, errorMessage: "errore di rete" });
  };

  const readFilms = async (query) => {
    setisLoading(true);
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=d60fa7a1&s=" + query
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
        this.networkError();
      }
    } catch (error) {
      setisLoading(false);
      networkError();
      console.error("ERRORE!", error);
    }
  };

  useEffect(() => {
    readFilms(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <img src={film["Poster"]} alt="" className="w-100" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
