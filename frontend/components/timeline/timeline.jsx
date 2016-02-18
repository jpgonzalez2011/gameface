var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store'),
    TimelineStore = require('../../stores/timeline_store'),
    PostForm = require('../posts/post_form'),
    PostCommentForm = require('../comments/post_comment_form'),
    PhotoCommentForm = require('../comments/photo_comment_form'),
    CommentDisplay = require('../comments/comment_display'),
    TimelinePostItem = require('./timeline_post_item'),
    TimelinePhotoItem = require('./timeline_photo_item'),
    SearchResults = require('../search/search_results');

var Timeline = React.createClass({
  getInitialState: function () {
    return ( this.getStateFromStore() );
  },

  getStateFromStore: function () {
    return ( {items: TimelineStore.allItems(), mainTimeLine: true });
  },

  componentDidMount: function () {
    this.storeCBToken = TimelineStore.addListener( function () {
      this.setState(this.getStateFromStore);
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  render: function () {
    return (
      <div>
        <div className="main-timeline-container group">
          <div className="main-timeline-center">
            <PostForm userId={CurrentUserStore.currentUser().id}/>
            <ul className="main-timeline-index">
              {this.state.items.map (function (item, i) {
                var header;
                if (item.type === "Post") {
                      var poster_url = "#/users/" + item.poster_id;
                      if (item.poster_name === item.target_name) {
                        header = <div><a href={poster_url}>{item.poster_name}</a></div>;
                      } else {
                        var target_url = "#/users/" + item.target_id;
                        header = <div><a href={poster_url}>{item.poster_name}</a> to <a href={target_url}>{item.target_name}</a></div>
                      }
                    return (
                      <TimelinePostItem key={i} header={header} item={item} mainTimeLine={this.state.mainTimeLine} i={i} />
                    );
                  } else if (item.type === "Photo") {
                    var uploader_url = "#/users/" + item.uploader_url;
                    header = <div><a href={uploader_url}>{item.uploader_name}</a></div>;
                    return (
                      <TimelinePhotoItem key={i} i={i} item={item} mainTimeLine={this.state.mainTimeLine} header={header} />
                    );
                  }
              }.bind(this))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Timeline;
