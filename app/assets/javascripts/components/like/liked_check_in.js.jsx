window.LikedCheckIn = React.createClass({

  toggleLike: function (e) {
    e.preventDefault();
    var checkInLikeId = this.checkInIsLiked();
    if (!checkInLikeId) {
      like = {
        like:{
          likeable_id: this.props.id,
          likeable_type: "CheckIn"
        }
      };
      LikeApiUtil.createLike(like);
    } else {
      LikeApiUtil.deleteLike(checkInLikeId, "CheckIn");
    }
  },


  checkInIsLiked: function () {
    for (var i = 0 ; i < this.props.likes.length; i++){
      if (this.props.likes[i].liker_id === currentUserId) {
        return this.props.likes[i].id;
      }
    }

    return undefined;
  },

  likeClass: function () {
    if (this.checkInIsLiked()) {
      return "comment-button liked";
    } else {
      return "comment-button";
    }
  },

  likeImages: function () {
    return this.props.sampleImg.map(function (imageUrl, idx) {
      return (<img key={idx} src={imageUrl} />);
    });
  },

  render: function () {
    return (
      <span className="likes">
        <button className={this.likeClass()} onClick={this.toggleLike}>
          Cheers!
        </button>
        <div className="like-counter"><h4>{this.props.likes.length} 🍺</h4></div>
        {this.likeImages()}
      </span>
    );
  }
});
