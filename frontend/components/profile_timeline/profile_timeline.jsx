var React = require('react'),
    PostForm = require('../posts/post_form'),
    PostStore = require('../../stores/post_store'),
    PostCommentForm = require('../comments/post_comment_form'),
    CommentDisplay = require('../comments/comment_display'),
    LikeButton = require('../likes/like_button'),
    FriendGrid = require('./timeline_friends_grid');

var ProfileTimeline = React.createClass({
  getInitialState: function () {
    return ( this.getStateFromStore(this.props) );
  },

  getStateFromStore: function (props) {
    return ({ posts: PostStore.findByTarget(props.params.userId) });
  },

  componentDidMount: function () {
    this.storeCBToken = PostStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
    PostStore.emptyPosts(this.props.params.userId);
  },

  componentWillMount: function () {
    this.getStateFromStore(this.props);
  },

  componentWillReceiveProps: function (newProps) {
    PostStore.emptyPosts(newProps.params.userId);
    this.setState(this.getStateFromStore(newProps));
  },

  render: function () {
    var poster_url;
    var target_url;
    return (
      <div className="timeline-container group">
        <div className="timeline-right-side">
          <PostForm userId={this.props.params.userId}/>
          <ul className="timeline-index-list">
            {this.state.posts.map( function (post, i) {
              var header;
              poster_url = "#/users/" + post.poster_id;
              target_url = "#/users/" + post.target_id;
              if (post.poster_name === post.target_name) {
                header = <div><a href={poster_url}><img className="poster-picture" src={post.poster_thumb_url}/>{post.poster_name}</a></div>;
              }
              else {
                header = <div><a href={poster_url}><img className="poster-picture" src={post.poster_thumb_url}/>{post.poster_name}</a> to <a href={target_url}>{post.target_name}</a></div>;
              }
              return (
                <li key={i} className="timeline-index-item">
                  <h1 className="timeline-index-item-header">
                    {header}
                    <span>{post.date_and_time}</span>
                  </h1>
                  <div className="timeline-index-item-content">{post.content}</div>
                  <LikeButton />
                  <ul className="timeline-index-item-comments-list">
                    {post.comments.map( function (comment, i) {
                      return (
                        <CommentDisplay key={i} comment={comment} />
                      );
                    })}
                  </ul>
                  <div className="timeline-index-item-comment-form">
                    <PostCommentForm mainTimeLine={undefined} commentable_id={post.id} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="timeline-left-side">
          <FriendGrid userId={this.props.params.userId} />
        </div>
      </div>
    );
  }
});

module.exports = ProfileTimeline;
