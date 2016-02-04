var React = require('react');


var NavSearchResultsPopup = React.createClass({
  render: function () {
    return(
      <div className="search-results-pop-container">
        <ul className="search-results-pop-list">
          <li className="search-results-pop-item">
            First Search Result
          </li>
        </ul>
      </div>
    );
  }
});


module.exports = NavSearchResultsPopup;
