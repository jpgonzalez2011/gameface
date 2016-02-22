var React = require('react'),
    CurrentUserStore = require('../stores/current_user_store');

var NavSearchField = require('./nav_search_field');

var LoggedInNavHeader = React.createClass({

  logOut: function (e) {
    CurrentUserStore.logOut();
  },

  render: function () {
    var profileUrl = "#/users/" + CurrentUserStore.currentUser().id;
    return (
      <div>
        <header className="in-header group">
          <nav className="in-nav-header group">
            <header className="header-text">
              <a href="#/timeline">GameFaces!</a>
            </header>
            <NavSearchField />
            <header className="signed-in-header">
              <div className="signed-in-header-name">
              <button onClick={this.logOut} className="log-out"> Sign Out! </button>
                <a className="own-profile group" href={profileUrl}><img className="own-profile-image" src={CurrentUserStore.currentUser().profile_thumb_url}/><span className="own-profile-name">{CurrentUserStore.currentUser().fname}</span></a>
              </div>
            </header>
          </nav>
        </header>
        <div className="position-corrector"> Content to not be seen
        </div>
      </div>
    );
  }
});

module.exports = LoggedInNavHeader;
