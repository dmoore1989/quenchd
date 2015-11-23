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
        <button className={this.likedCheckIn} onClick={this.toggleLike}>
          Cheers!
        </button>
        <h5>{this.props.likes.length}</h5>
      </span>
    );
  }
});
