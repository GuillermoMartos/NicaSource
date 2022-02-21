import "./footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <h3>NicaMovies</h3>
      <h5>brougth to you by NicaSource △</h5>
      <div className="foot-links">
        <a className="link" href="#top">
          Up 🏠
        </a>

        <a className="link" href="https://nicasource.com/" target="_blank">
          NicaSource ⏫
        </a>

        <a
          className="link"
          href="https://github.com/GuillermoMartos"
          target="_blank"
        >
          See web dev repository 💻
        </a>
      </div>
    </div>
  );
}

export default Footer;
