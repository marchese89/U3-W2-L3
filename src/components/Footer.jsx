import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="my-5 mb-0">
        <div className="container w-75">
          <i className="bi bi-facebook fs-2 me-3"></i>
          <i className="bi bi-instagram fs-2 me-3"></i>
          <i className="bi bi-twitter fs-2 me-3"></i>
          <i className="bi bi-youtube fs-2 me-3"></i>
        </div>
        <div
          id="footer-text"
          className="d-flex container w-75 justify-content-between"
        >
          <div className="mt-3">
            <ul className="list-unstyled">
              <li>Audio and Subtitles</li>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="mt-3">
            <ul className="list-unstyled">
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
              <li></li>
            </ul>
          </div>
          <div className="mt-3">
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Coockie Preferences</li>
              <li></li>
            </ul>
          </div>
          <div className="mt-3">
            <ul className="list-unstyled">
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="container w-75 mt-3 mb-3">
          <button>Service Code</button>
        </div>
        <p className="container w-75">
          &copy; 1997-2019 Netflix, Inc. &#123;i-0d00fcda2fdf9c0de&#125;
        </p>
      </footer>
    );
  }
}

export default Footer;
