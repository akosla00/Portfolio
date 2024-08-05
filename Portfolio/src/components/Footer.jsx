import React from "react";

const Footer = () => {
  return (
    <footer style={{ borderTopStyle: "solid", borderColor: "#E5DADA" }}>
      <div>
        <a
          href="https://github.com/akosla00"
          className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          target="blank"
        >
          Github
        </a>
        <br />
        <a
          href="https://www.instagram.com/aleckosla/"
          className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          target="blank"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
