window.LikedCheckIn = React.createClass({

  toggleLike: function (e) {
    e.preventDefault();

    like = {
      like:{
        likeable_id: this.props.checkIn.id,
        likeable_type: "CheckIn"
      }
    };
    LikeApiUtil.createLike(like);
  },

  render: function () {
    return (
      <span>
        <button className="comment-button" onClick={this.toggleLike}>
          Cheers!
        </button>
        <div className="like-counter"><h4>{this.props.likes.length} 🍺</h4></div>
      </span>
    );
  }
});
