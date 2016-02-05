var React = require('react'),
    NavSearchResultsPopup = require('./nav_search_results_popup'),
    SearchApiUtil = require('../util/search_api_util'),
    SearchStore = require('../stores/search_store');

var NavSearchField = React.createClass({

  mixins: [
    require('react-onclickoutside')
  ],

  getInitialState: function () {
    return ({query: "", searchResults: [],
    show: false
    });
  },

  handleFocus: function (e) {
    this.setState({show: true});
  },

  handleBlur: function (e) {
  setTimeout(this.setState({show: false}),100);
  },

  handleClickOutside: function(evt) {
  this.setState({show: false}); 
  },

  handleKey: function (e) {
    var query = e.target.value;
    SearchApiUtil.fetchUsers(query);
    // this.setState( { query: query} );
  },

  handleChange: function () {
    this.setState({searchResults: SearchStore.userSearchResults()});
  },

  componentDidMount: function () {
    storeCBToken = SearchStore.addListener(this.handleChange);
  },

  render: function () {
    return (
      <div onFocus={this.handleFocus}>
        <input className="nav-search-field" placeholder="Up Up Down Down Left Right Left Right B A Start" type="text" onKeyUp={this.handleKey}/>
        <NavSearchResultsPopup show={this.state.show} searchResults={this.state.searchResults} />
      </div>
    );
  }
});

module.exports = NavSearchField;
