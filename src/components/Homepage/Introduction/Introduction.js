import React from "react";
import "./_introduction.scss";
import shodipoayomide from "../../../assets/images/shodipoayomide.JPG";
import dots from "../../../assets/images/dots.png";
import line from "../../../assets/images/introlines.png";
import dotsSquare from "../../../assets/images/dots-square.png";
import socials from "../../../assets/images/socials.png";
import socials1 from "../../../assets/images/socials-1.png";
import brackets from "../../../assets/images/brackets.png";
import file from "../../../assets/images/file.png";
import zigzag from "../../../assets/images/zigzag.png";

const Introduction = props => (
  <section id="intro" className="intro container section-spacing">
    <div className="row">
      <div className="col-12 col-lg-6 intro-text-col">
        <div className="socials-img d-none d-lg-block">
          <img src={socials} alt="socials" style={{ width: "12px" }} />
        </div>
        <div className="intro-text-box">
          <h1>Shodipo Ayomide</h1>
          <p className="sub-text">Senior Developer Advocate.</p>
          <p className="description desc">
           Building Developer Communities in Africa and acorss the globe, sharing technical knowledge via talks, keynotes and workshops at conferences across the globe.
          </p>
          <img
            className="d-block d-lg-none"
            src={socials1}
            alt="socials"
            style={{ width: "79%", marginBottom: "20px" }}
          />
          <a href="https://speaking.shodipoayomide.com"> <button className="primary-btn">Learn More</button></a>
        </div>
        <img src={zigzag} className="zigzag d-none d-lg-block" alt="zig-zag" />
      </div>
      <div className="col-12 col-lg-6">
        <div className="dots">
          <img className="img-fluid dots-img" src={dots} alt="freelancer" />
        </div>
        <div className="freelancer-img-div">
          <img className="img-fluid" src={shodipoayomide} alt="shodipoayomide" />
          <img
            className="brackets d-none d-lg-block"
            src={brackets}
            alt="brackets"
          />
          <img className="file d-none d-lg-block" src={file} alt="file" />
        </div>
        <div>
          <img className="dashed-box" src={line} alt="line" />
        </div>
      </div>
    </div>
    <img
      className="square-dots dots-img d-none d-lg-block"
      src={dotsSquare}
      alt="dots-sq"
    />
  </section>
);
export default Introduction;
