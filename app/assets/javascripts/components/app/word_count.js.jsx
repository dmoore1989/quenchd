window.WordCount = React.createClass({
  render: function () {
    return (
      <div className="word-count">
        <h6>{140 - this.props.count}</h6>
      </div>
    );
  }
});
