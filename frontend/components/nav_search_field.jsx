var React = require('react'),
    NavSearchResultsPopup = require('./nav_search_results_popup');

var NavSearchField = React.createClass({
  getInitialState: function () {
    return ({search: "", searchResults: [
      {id: 2, profile_small_url: 'http://s3.amazonaws.com/aa-gamefaces-app-dev/profile_pictures/images/000/000/002/small/luigi.jpg?1454568573', full_name: "Luigi Mario"},
      {id: 2, profile_small_url: 'http://s3.amazonaws.com/aa-gamefaces-app-dev/profile_pictures/images/000/000/002/small/luigi.jpg?1454568573', full_name: "Luigi Mario"},
      {id: 2, profile_small_url: 'http://s3.amazonaws.com/aa-gamefaces-app-dev/profile_pictures/images/000/000/002/small/luigi.jpg?1454568573', full_name: "Luigi Mario"}
    ]
    });
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
