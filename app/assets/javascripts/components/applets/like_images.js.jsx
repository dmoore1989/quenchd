window.LikeImages = React.createClass({
  renderImages: function () {
    return this.props.likes.map(function(like){
      return (<li><img src={like} /></li>);
    });
  },

  render: function () {
    return (
      <div className="sidebar-applet">
        <div className="sidebar-applet-header" >
          <h4>Likes</h4>
        </div>

        <ul className="picture-list group">{this.renderImages()}</ul>
      </div>
    );
  }
});
