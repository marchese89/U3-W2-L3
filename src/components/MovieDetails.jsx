import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
export default function MovieDetails() {
  const params = useParams();
  const [filmDetails, setFilmDetails] = useState({});
  const [detailsKeys, setdetailsKeys] = useState([]);
  const [listOfComments, setlistOfComments] = useState([]);
  useEffect(() => {
    getMovieDetails();
    getMovieComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getMovieDetails() {
    // setisLoading(true);
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=d60fa7a1&i=" + params.movieId
      );
      if (response.ok) {
        const data = await response.json();
        if (data["Response"] === "False") {
          //   setisLoading(false);
          //   networkError();
        } else {
          //   setfilmImages(data["Search"].slice(0, 6));
          setFilmDetails(data);
          setdetailsKeys(Object.keys(data));
        }
      } else {
        // setisLoading(false);
        // networkError();
      }
    } catch (error) {
      //   setisLoading(false);
      //   networkError();
      console.error("ERRORE!", error);
    }
  }

  async function getMovieComments() {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + params.movieId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGFkZmY2ZTNkZDAwMTQ5NWU0MzMiLCJpYXQiOjE2OTgzMTkwNzEsImV4cCI6MTY5OTUyODY3MX0.6OiHMcwB71-jL1waCDYllDV5ONJ4nMJocBRyTYVP518",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setlistOfComments(data);
      }
    } catch (err) {
      console.log("ERRORE", err);
      // setError(true);
    }
  }
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="text-center text-white mb-3">{filmDetails.Title}</h3>
          <div className="text-center mb-3">
            <img src={filmDetails.Poster} alt={filmDetails.Title} />
          </div>
          <h4 className="text-center text-white mb-3">Dettagli</h4>
          {detailsKeys
            .filter((key) => {
              return (
                key !== "Ratings" &&
                key !== "Title" &&
                key !== "Response" &&
                key !== "Poster"
              );
            })
            .map((key, i) => {
              return (
                <div key={i} className="text-white text-center">
                  {key}: {filmDetails[key]}
                </div>
              );
            })}
          <h4 className="text-center text-white my-3">Commenti</h4>
          {listOfComments.map((comment) => {
            return (
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center bg-dark border rounded-2  w-50 mb-4">
                  <div className="text-center text-white">
                    <div className="py-2">
                      <h5 className="text-info">Commento</h5>
                      {comment.comment}
                    </div>
                    <div className="py-2">
                      <h5 className="text-info">Rating</h5>
                      {comment.rate}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
