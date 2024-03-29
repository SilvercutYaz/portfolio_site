import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import yazpicture from "../images/yazan picture office.jpg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={yazpicture} alt="me" className="avatar-img" />
            <div className="banner-text">
              <h1>Front End Developer</h1>
              <hr />
              <p>HTML/CSS || Javascript || React || NodeJS </p>
              <div className="social-links">
                {/*LinkedIn */}
                <a
                  href="https://www.google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />{" "}
                </a>

                {/*Github */}
                <a
                  href="https://www.google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
