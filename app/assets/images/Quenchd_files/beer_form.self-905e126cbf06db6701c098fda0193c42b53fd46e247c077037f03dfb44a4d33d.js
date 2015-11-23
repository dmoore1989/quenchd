window.BeerForm = React.createClass({
  displayName: "BeerForm",

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      name: "",
      abv: "",
      ibu: "",
      style: "",
      description: "",
      brewerId: ""
    };
  },

  createBeer: function (e) {
    e.preventDefault();
    beer = {
      beer: {
        name: this.state.name,
        abv: this.state.abv,
        ibu: this.state.ibu,
        style: this.state.style,
        description: this.state.description,
        brewery_id: this.state.brewerId
      }
    };
    BeerApiUtil.createBeer(beer);
    this.props.history.pushState(null, "/");
  },

  render: function () {
    return React.createElement(
      "section",
      { className: "new-item" },
      React.createElement(
        "a",
        { href: "<%= root_url %>" },
        React.createElement(
          "h1",
          null,
          "Quenchd"
        ),
        React.createElement(
          "h2",
          null,
          "DRINK UP!"
        )
      ),
      React.createElement(
        "section",
        { className: "landing-modal-title" },
        React.createElement(
          "form",
          { className: "landing-form" },
          React.createElement(
            "div",
            { className: "sign-up group" },
            React.createElement(
              "label",
              null,
              "Beer",
              React.createElement("input", { type: "text", valueLink: this.linkState('name') })
            ),
            React.createElement(
              "label",
              null,
              "Alcohol By Volume",
              React.createElement("input", { type: "text", valueLink: this.linkState('abv') })
            ),
            React.createElement(
              "label",
              null,
              "International Bittering Units",
              React.createElement("input", { type: "text", valueLink: this.linkState('ibu') })
            ),
            React.createElement(
              "label",
              null,
              "Style",
              React.createElement("input", { type: "text", valueLink: this.linkState('style') })
            ),
            React.createElement(
              "label",
              null,
              "Description",
              React.createElement("input", { type: "text", valueLink: this.linkState('description') })
            ),
            React.createElement(
              "label",
              null,
              "Brewer Id",
              React.createElement("input", { type: "text", valueLink: this.linkState('brewerId') })
            ),
            React.createElement(
              "button",
              { className: "landing-form-button", onClick: this.createBeer },
              "Create!"
            )
          )
        )
      )
    );
  }

});