window.LikedShowItem = React.createClass({
  toggleLike: function (e) {
    e.preventDefault();
    var checkInLikeId = this.checkInIsLiked();
    if (!checkInLikeId) {
      like = {
        like:{
          likeable_id: this.props.id,
          likeable_type: this.props.type
        }
      };
      LikeApiUtil.createLike(like);
    } else {
      LikeApiUtil.deleteLike(checkInLikeId);
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
      return "header-button liked";
    } else {
      return "header-button";
    }
  },

  render: function () {
    return (
      <button className={this.likeClass()} onClick={this.toggleLike}>
          +
      </button>
    );
  }
});
