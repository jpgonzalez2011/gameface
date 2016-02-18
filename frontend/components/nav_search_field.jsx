var React = require('react'),
    NavSearchResultsPopup = require('./nav_search_results_popup'),
    SearchApiUtil = require('../util/search_api_util'),
    SearchStore = require('../stores/search_store'),
    FriendApiUtil = require('../util/friend_api_util'),
    CurrentUserStore = require('../stores/current_user_store');

var NavSearchField = React.createClass({

  mixins: [
    require('react-onclickoutside')
  ],

  handleClickOutside: function(evt) {
    this.setState({show: false, searchResults: []});
    $(".nav-search-field").val("");
  },

  getInitialState: function () {
    return ({query: "", searchResults: [],
    show: false
    });
  },

  handleFocus: function (e) {
    this.setState({show: true});
  },

  componentWillReceiveProps: function () {
    this.setState({show: false, searchResults: []});
    $(".nav-search-field").val("");
  },

  handleKey: function (e) {
    var query = e.target.value;
    SearchApiUtil.fetchUsers(query);
  },

  handleChange: function () {
    this.setState({searchResults: SearchStore.userSearchResults()});
  },

  handleClick: function (e) {
    e.stopPropagation();
    this.setState({show: false});
    $(".nav-search-field").val("");
  },

  componentDidMount: function () {
    storeCBToken = SearchStore.addListener(this.handleChange);
  },

  render: function () {
    return (
      <div onFocus={this.handleFocus} >
        <input onFocus={this.handleFocus} className="nav-search-field" placeholder="Search for Users (Enter Username or User's First/Last Name)" type="text" onKeyUp={this.handleKey}/>
        <NavSearchResultsPopup show={this.state.show} searchResults={this.state.searchResults} onClick={this.handleClick} />
      </div>
    );
  }
});

module.exports = NavSearchField;
