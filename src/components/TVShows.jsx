import { useState } from "react";
import { Alert } from "react-bootstrap";
import FilmRowFunction from "./FilmRowFunction";

export default function TVShows() {
  const [error, setError] = useState({
    error: false,
    errorMessage: "",
  });
  return (
    <>
      <h3 className="text-white mt-3 mb-3 mt-5">TVShows</h3>
      {error.error && (
        <Alert variant="danger" className="text-center">
          {error.errorMessage}
        </Alert>
      )}
      <FilmRowFunction query="series" handleError={setError} />
    </>
  );
}
