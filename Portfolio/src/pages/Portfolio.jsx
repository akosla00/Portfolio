import React from "react";
import heroHelper from "../assets/heroHelperSS.png";
import blog from "../assets/blog.png";
import movieFinder from "../assets/movieFinder.png";
import noteTaker from "../assets/noteTaker.png";
import payroll from "../assets/payroll.png";
import taskBoard from "../assets/taskBoard.png";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="d-flex justify-content-evenly flex-wrap"
      style={{ height: "80vh", width: "98vw" }}
    >
      <div>
        <img
          src={heroHelper}
          style={{ width: "250px", height: "250px" }}
          className="imgBorder mt-5"
        />
        <h3>
          <a
            href="https://hero-helper.onrender.com/"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            target="blank"
          >
            Hero Helper
          </a>
        </h3>
      </div>
      <div>
        <img
          src={blog}
          style={{ width: "250px", height: "250px" }}
          className="imgBorder mt-5"
        />
        <h3>
          <a
            href="https://akosla00.github.io/Module-4-Challenge/"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            target="blank"
          >
            Blog
          </a>
        </h3>
      </div>
      <div>
        <img
          src={movieFinder}
          style={{ width: "250px", height: "250px" }}
          className="imgBorder mt-5"
        />
        <h3>
          <a
            href="https://akosla00.github.io/MovieFinder/index.html"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            target="blank"
          >
            Movie Finder
          </a>
        </h3>
      </div>
      <div>
        <img
          src={noteTaker}
          style={{ width: "250px", height: "250px" }}
          className="imgBorder mt-5"
        />
        <h3>
          <a
            href="https://note-taker-1-bgv6.onrender.com/"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            target="blank"
          >
            Note Taker
          </a>
        </h3>
      </div>
      <div>
        <img
          src={payroll}
          style={{ width: "250px", height: "250px" }}
          className="imgBorder mt-5"
        />
        <h3>
          <a
            href="https://akosla00.github.io/Module-3-Challenge/"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            target="blank"
          >
            Payroll Tracker
          </a>
        </h3>
      </div>
      <div>
        <img
          src={taskBoard}
          style={{ width: "250px", height: "250px" }}
          className="imgBorder mt-5"
        />
        <h3>
          <a
            href="https://akosla00.github.io/Module-5-Challenge/"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            target="blank"
          >
            Taskboard
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Portfolio;
