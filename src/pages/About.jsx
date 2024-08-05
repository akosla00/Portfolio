import React from "react";
import Image from "../assets/image.png"

const About = () => {
  return (
    <div id="about" style={{ height: "80vh", width: "98vw" }}>
      <div className="d-flex">
        <img
          style={{ height: "400px" }}
          src="https://f4.bcbits.com/img/0032041425_10.jpg"
        />
        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-center"
        >
          <div>
            <h1>Alec Kosla</h1>
            <p>I am a beginner full-stack developer! </p>
            <p>
              Outside of programming, I like to write music, play video games,
              and hang out with my <a href={Image} target="_blank">dog</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
