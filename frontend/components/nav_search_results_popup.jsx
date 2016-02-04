var React = require('react');


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
          <li className="search-results-pop-item">
            {this.props.searchResults.map( function (result, i) {
              return (
              <div>
                {result};
              </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  }
});


module.exports = NavSearchResultsPopup;
