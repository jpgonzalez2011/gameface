var React = require('react'),
    NavSearchResultsPopup = require('./nav_search_results_popup');

var NavSearchField = React.createClass({
  getInitialState: function () {
    return {search: "", searchResults: []};
  },

  handleKey: function (e) {
    this.setState( { search: e.target.value} );
    //pass to search store
  },

  render: function () {
    return (
      <div>
        <input className="nav-search-field" placeholder="Up Up Down Down Left Right Left Right B A Start" type="text" onKeyUp={this.handleKey}/>
        <NavSearchResultsPopup searchResults={this.state.searchResults} />
      </div>
    );
  }
});

module.exports = NavSearchField;
