import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <a href="#" className="left brand-logo">
                Emails
              </a>
              <ul className="right">
                <li>
                  <a href="#">Login With Google</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
