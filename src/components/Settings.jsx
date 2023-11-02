import { Component } from "react";

class Settings extends Component {
  render() {
    return (
      <div className="container-fluid w-100 bg-white">
        <div className="container w-50 mt-4 mb-5 bg-white" id="settings">
          <h2>Account</h2>
          <hr />
          <div className="d-flex">
            <div className="d-flex flex-column align-items-start text-nowrap w-25">
              <h6>MEMBERSHIP &amp; BILLING</h6>
              <button className="border-0 px-2 py-1 fs-6">
                Cancel Membership
              </button>
            </div>
            <div className="ms-5 w-100">
              <div>
                <div className="d-flex justify-content-between">
                  <strong>student@strive.school</strong>
                  <a href="#">Change account email</a>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Password: ********</p>
                  <a href="#">Change password</a>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Phone: 321 044 1279</p>
                  <a href="#">Change phone number</a>
                </div>
                <hr />
              </div>
              <div className="d-flex justify-content-between">
                <p className="d-flex justify-content-between">
                  <i className="bi bi-paypal"></i>&nbsp;&nbsp;
                  <strong>admin@strive.school</strong>
                </p>
                <p>
                  <a href="#">Update payment info</a>
                </p>
              </div>
              <div>
                <p className="d-flex justify-content-end">
                  <a href="#">Billing details</a>
                </p>
              </div>
              <hr />
              <div>
                <p className="d-flex justify-content-end">
                  <a href="#">Redeem gift card or promo code</a>
                </p>
                <p className="d-flex justify-content-end">
                  <a href="#">Where to buy gift cards</a>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div className="w-25">
              <h6>PLAN DETAILS</h6>
            </div>
            <div className="ms-5 d-flex w-75">
              <div className="ms-3">
                <strong className="me-2">
                  Premium&nbsp;
                  <span id="uhd" className="ms-2 rounded-1">
                    ULTRA HD
                  </span>
                </strong>
              </div>
              <div className="d-flex flex-grow-1 justify-content-end">
                <a href="#">Change plan</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div className="w-25">
              <h6>SETTINGS</h6>
            </div>
            <div className="ms-5 d-flex flex-column">
              <a href="#">Parental controls</a>
              <a href="#">Test participation</a>
              <a href="#">Manage download devices</a>
              <a href="#">Activate a device</a>
              <a href="#">Recent device streaming activity</a>
              <a href="#">Sign out of all devices</a>
            </div>
          </div>
          <hr />

          <div className="d-flex">
            <div className="w-25">
              <h6>MY PROFILE</h6>
            </div>
            <div className="w-75 d-flex justify-content-between">
              <div className="w-100 d-flex justify-content-between mb-1">
                <div className="ms-5">
                  <img
                    src="assets/avatar.png"
                    alt="avatar"
                    className="avatar"
                  />
                  &nbsp; <strong>Strive Student</strong>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <a href="#">Manage profiles</a>
                  <a href="#">Add profile email</a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="w-25 me-3"></div>
            <div className="d-flex w-75 ms-5 mt-3">
              <div className="d-flex flex-column w-50">
                <a href="#">Language</a>
                <a href="#">Playback settings</a>
                <a href="#">Subtitle appearence</a>
              </div>
              <div className="d-flex flex-column w-50">
                <a href="#">Viewing activity</a>
                <a href="#">Ratings</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
