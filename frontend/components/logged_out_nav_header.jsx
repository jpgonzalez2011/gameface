var React = require('react'),
    CurrentUserStore = require('../stores/current_user_store');

var NavSearchField = require('./nav_search_field');

var LoggedOutNavHeader = React.createClass({
  getInitialState: function () {
    return ({
      currentUser: CurrentUserStore.currentUser() });
  },

  getCurrentUserFromStore: function () {
     this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  submitCredentials: function (e) {
    e.preventDefault();
    CurrentUserStore.acceptCredentials(
      { username: this.state.username, password: this.state.password }
    );
  },

  logInAsMario: function () {
    CurrentUserStore.acceptCredentials(
      { username: "mario", password: "password"}
    );
  },

  updateUsername: function (e) {
    this.setState({ username: e.target.value.toLowerCase() });
  },

  updatePassword: function (e) {
    this.setState({ password: e.target.value });
  },

  render: function () {
    return (
      <header className="out-header group">
        <nav className="out-nav-header group">
          <header className="header-text">
            <a href="#/">GameFaces!</a>
          </header>
            <button onClick={this.logInAsMario} className="mario-log-in"> Log in as Mario! </button>
            <a className="facebook-link" href="/auth/facebook"><button className="facebook-log-in">Log in with Facebook</button></a>
          <header className="sign-in-header group">
            <form onSubmit={this.submitCredentials} className="sign-in-header-form group">
                <label htmlFor="username">Username</label>
                <label htmlFor="password">Password</label>
                <input onChange={this.updateUsername} type="text" name="user[username]" id="username"/>
                <input onChange={this.updatePassword} type="password" name="user[password]" id="password"/>
                <button>Submit</button>
            </form>
          </header>
        </nav>
      </header>
    );
  }
});


module.exports = LoggedOutNavHeader;
