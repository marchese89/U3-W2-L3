import { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div id="outer" className="text-center">
        <div id="main" className="text-white d-flex justify-content-center">
          <div>
            <div>
              <h1 className="text-white text-start">Edit Profile</h1>
              <hr />
            </div>
            <div className="d-flex">
              <div>
                <img src="assets/avatar.png" alt="avatar" id="avatar" />
              </div>
              <div className="ms-4">
                <section className="d-flex flex-column">
                  <input
                    type="text"
                    value="Strive Student"
                    className="text-white ps-2 mb-3"
                  />
                  <label className="mb-1">Language</label>
                  <select name="" className="text-white">
                    <option value="">English</option>
                    <option value="">Italiano</option>
                  </select>
                  <hr />
                </section>
                <section>
                  <p>Maturity Settings:</p>
                  <div className="border-0 text-white px-2 py-1 rounded-1 mb-2 fs-6">
                    ALL MATURITY RATINGS
                  </div>
                  <p className="text-start">
                    Show titles of all maturity ratings for this profile
                  </p>
                  <div className="text-start m-0 border-0 bg-transparent">
                    <button className="px-3 px-2">EDIT</button>
                  </div>
                  <hr />
                </section>
                <section>
                  <h5 className="fw-light">Autoplay controls</h5>
                  <div className="text-start border-0 bg-transparent text-white text-nowrap">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" name="check" id="check" />
                      <span className="checkmark"></span>
                    </label>
                    Autoplay next episode in a series on all devices.
                  </div>
                  <label className="checkbox-wrapper">
                    <input type="checkbox" name="check" id="check" />
                    <span className="checkmark"></span>
                  </label>
                  &nbsp;Autoplay previews while browsing on all devices.
                </section>
              </div>
            </div>
            <div className="text-center">
              <section className="mt-0">
                <hr className="text-white" />
                <button className="b-withe bg-white mx-3 px-3">SAVE</button>
                <button className="mx-3 px-3">CANCEL</button>
                <button className="mx-3 px-3">DELETE PROFILE</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
