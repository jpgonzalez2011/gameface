var React = require('react'),
    FriendIndexItem = require('./friends/friend_index_item');


var NavSearchResultsPopup = React.createClass({
  render: function () {
    if (this.props.searchResults.length === 0) {
      return (
        <div>

        </div>
      );
    }
    return(
      <div className="search-results-pop-container">
        <ul className="search-results-pop-list">
          {this.props.searchResults.map( function (result, i) {
            return (
              <li key={i} className="search-results-pop-item">
                  <FriendIndexItem friend={result} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});


module.exports = NavSearchResultsPopup;
