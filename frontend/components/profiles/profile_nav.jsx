var React = require('react');


var ProfileNav = React.createClass({
  getInitialState: function () {
    return ({
      about: null,
      timeline: "profile-nav-selected",
      photos: null,
      friends: null
    });
  },

  selectAbout: function () {
    this.setState({
      about: "profile-nav-selected",
      timeline: null,
      photos: null,
      friends: null
    });
  },

  selectTimeline: function () {
    this.setState({
      about: null,
      timeline: "profile-nav-selected",
      photos: null,
      friends: null
    });
  },

  selectPhotos: function () {
    this.setState({
      about: null,
      timeline: null,
      photos: "profile-nav-selected",
      friends: null
    });
  },

  selectFriends: function () {
    this.setState({
      about: null,
      timeline: null,
      photos: null,
      friends: "profile-nav-selected"
    });
  },

  render: function () {
    var photos = "#/users/" + this.props.userId + "/photos",
    about = "#/users/" + this.props.userId + "/about",
    timeline = "#/users/" + this.props.userId + "/timeline",
    friends = "#/users/" + this.props.userId + "/friends";
    return (
        <ul className="profile-nav group">
          <li className="profile-nav-option"> <a className={this.state.about} onClick={this.selectAbout} href={about}> About </a> </li>
          <li className="profile-nav-option"> <a className={this.state.timeline} onClick={this.selectTimeline} href={timeline}> Timeline </a> </li>
          <li className="profile-nav-option"> <a className={this.state.photos} onClick={this.selectPhotos} href={photos}> Photos </a> </li>
          <li className="profile-nav-option"> <a className={this.state.friends} onClick={this.selectFriends} href={friends}> Friends </a> </li>
        </ul>
    )
  }
});

module.exports = ProfileNav;
