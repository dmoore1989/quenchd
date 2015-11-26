window.LikeImages = React.createClass({
  renderImages: function () {
    return this.props.likes.map(function(like){
      return (<li><img src={like} /></li>);
    });
  },

  render: function () {
    return (<ul>{this.renderImages()}</ul>);
  }
});
