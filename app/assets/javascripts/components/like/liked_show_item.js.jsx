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
    var showLikes = ShowStore.allLikes();
    for (var i = 0 ; i < showLikes.length; i++){
      if (showLikes[i].liker_id === currentUserId) {
        return showLikes[i].id;
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
