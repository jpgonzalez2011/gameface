var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store'),
    TimelineStore = require('../../stores/timeline_store'),
    PostForm = require('../posts/post_form'),
    PostCommentForm = require('../comments/post_comment_form'),
    PhotoCommentForm = require('../comments/photo_comment_form'),
    CommentDisplay = require('../comments/comment_display'),
    TimelinePostItem = require('./timeline_post_item'),
    TimelinePhotoItem = require('./timeline_photo_item');

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
      <div className="main-timeline-container group">
        <div className="main-timeline-center">
          <PostForm userId={CurrentUserStore.currentUser().id}/>
          <ul className="main-timeline-index">
            {this.state.items.map (function (item, i) {
              var header;
              if (item.type === "Post") {
                    header = item.poster_name + " to " + item.target_name;
                  return (
                    <TimelinePostItem key={i} header={header} item={item} mainTimeLine={this.state.mainTimeLine} i={i} />
                  );
                } else if (item.type === "Photo") {
                  header = item.uploader;
                  return (
                    <TimelinePhotoItem key={i} i={i} item={item} mainTimeLine={this.state.mainTimeLine} header={header} />
                  );
                }
            }.bind(this))}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Timeline;
