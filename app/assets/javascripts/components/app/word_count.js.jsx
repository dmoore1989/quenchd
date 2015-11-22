window.WordCount = React.createClass({
  render: function () {
    return (
      <div className="word-count">
        <p>{140 - this.props.count}</p>
      </div>
    );
  }
});
