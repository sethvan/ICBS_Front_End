import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  // state = { pushToString: "" };

  // componentDidUpdate() {
  //   let scrollingTimeout;
  //   window.addEventListener("scroll", function (e) {
  //     if (scrollingTimeout) {
  //       clearTimeout(scrollingTimeout);
  //     }
  //     scrollingTimeout = setTimeout(() => {
  //       if (this.pushToString !== "") {
  //         this.props.history.push(`${this.pushToString}`);
  //       }
  //       this.setState({ pushToString: "" });
  //     }, 50);
  //   });
  // }
  // handleClick = async (e) => {
  //   await this.props.setPushString("/creencias");
  //   window.scrollTo(0, 0);
  // };

  render() {
    return (
      <footer
        className="footer py-3 mt-auto"
        style={{
          backgroundColor: "#bfd7ea",
          fontSize: "18px",
        }}
      >
        <div className="container d-flex justify-content-center">
          {/* <span className="text-muted footer-name-span">
            IglesiaBautistaSinai 2022
          </span> */}
          <Link
            to="/estudios/6227a86b555bce33f070ce67"
            className="text-muted footer-link"
          >
            ¡Bienvenidos!
          </Link>
          <span className="text-muted footer-link-divider"> | </span>

          <Link to="/creencias" className="text-muted footer-link">
            Creencias
          </Link>
          <span className="text-muted footer-link-divider"> | </span>
          <a
            className="text-muted footer-link"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=523231341498"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
