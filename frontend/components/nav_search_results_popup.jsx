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
      <div className="search-results-pop-container group">
        <ul className="search-results-pop-list group">
          {this.props.searchResults.map( function (result, i) {
            var url = "#/users/" + result.id;
            return (
              <a key={i} href={url}>
                <li className="search-results-pop-item">
                    <FriendIndexItem friend={result} />
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    );
  }
});


module.exports = NavSearchResultsPopup;
