import React from "react";
import "./Theme.css";
import { Fade } from "react-awesome-reveal";
import themeImage from "../../assets/images/theme.webp";
// import { Link } from "react-router-dom";
// import video1 from "../../assets/videos/theme.mp4";
import THEME from "../../assets/images/Theme_2024.png";

export default function Theme() {
  return (
    <>
      <section className="theme">
        <Fade direction="up" delay={300} triggerOnce>
          <div className="atk-heading">
            <h2>
              <span
                className="red"
                style={{
                  fontWeight: "normal",
                }}
              >
                {" "}
                THEME{" "}
              </span>
              <span className="white"> FOR CONFERENCE 2024 </span>
            </h2>
          </div>

          <h2 style={{ textTransform: "uppercase", fontWeight: "normal" }}>
            <span className="white">Beyond the </span>Obvious{" "}
          </h2>
        </Fade>
        <div className="main">
          <div className="theme-img">
            <img src={THEME} height="600" width="500" />
          </div>

          <Fade direction="right" delay={300} triggerOnce>
            <div className="theme-text">
              {/* <h5>
								<span>Reflective </span> Tapestry
							</h5> */}
              <p>
              Beyond the Obvious celebrates the audacity to redefine success by challenging conventions and charting untrodden paths. It’s about individuals who dared to go against the grain, starting their journeys in unexpected directions, defying norms, and embracing the unconventional. These stories inspire us to look beyond the surface, question the status quo, and find innovation in the unlikeliest of places. This year’s TEDx invites you to explore how thinking differently can lead to extraordinary breakthroughs and a reimagining of what success truly means.
              </p>
              {/* <Link to="/contactus" type="button" className="theme_btn">
								Contact Us
							</Link> */}
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
