import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login With Google</a>;

      default:
        return <a href="/api/logout">Log out</a>;
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
                Emails
              </Link>
              <ul className="right">
                <li>{this.renderContent()}</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
