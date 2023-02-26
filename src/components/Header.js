import React from "react";
import logo from "./../images/logo.svg";
import iconClose from "./../images/icon-close.svg";
import iconOpen from "./../images/icon-hamburger.svg";
import "./Header.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.header = React.createRef();
    this.ul = React.createRef();
  }

  componentDidMount() {
    console.log(this.header.current);
  }

  render() {
    return (
      <header ref={this.header} className="header open">
        <nav className="nav">
          <img src={logo} alt="Logo" />
          <img
            className="navBtn"
            src={setTimeout(this.checkIfNavOpen, 1000)}
            alt=""
          />

          <ul ref={this.ul} className="ul">
            <li>
              <a href=".">About</a>
            </li>
            <li>
              <a href=".">Careers</a>
            </li>
            <li>
              <a href=".">Events</a>
            </li>
            <li>
              <a href=".">Products</a>
            </li>
            <li>
              <a href=".">Support</a>
            </li>
          </ul>
        </nav>

        <h1 className="h1">Immersive experiences that deliver</h1>
      </header>
    );
  }
}
