var React = require('react');

var LandingContent = React.createClass({
  render: function () {
    return (
      <div>
        <header className="welcome-header">
          This is GameFaces!
        </header>
        <header className="welcome-tagline">
          A Project by <a className="welcome-link" href="http://jpgonzalez.io">JP Gonzalez.</a>
        </header>
        <p className="project-blurb">
          Built with Ruby on Rails and React.js, GameFaces! is a technical
          recreation of Facebook.. for video game characters!
        </p>
        <p className="follow-line"> More by JP Gonzalez </p>
        <a className="portfolio-link" href="http://jpgonzalez.io"> Porfolio Site </a> <br />
        <span className="snake-description"><a className="snake-link" href="http://jpgonzalez.io/Snake"> SnakeS </a> - A fun take on the classic 1970s video game! </span>

      </div>
    )
  }
});


module.exports = LandingContent;
