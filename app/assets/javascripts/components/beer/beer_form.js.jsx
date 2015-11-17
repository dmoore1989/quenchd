window.BeerForm = React.CreateClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      name: "",
      abv: "",
      ibu: "",
      style: "",
      description: "",
      brewerId: ""
    });
  },

  createBeer: function() {
    console.log("Beer Created, NOT!")
  },

  render: function() {
    return(
      <form>
        <input type="text" valueLink={this.linkState('name')}/>
        <input type="text" valueLink={this.linkState('abv')}/>
        <input type="text" valueLink={this.linkState('ibu')}/>
        <input type="text" valueLink={this.linkState('style')}/>
        <input type="text" valueLink={this.linkState('description')}/>
        <input type="text" valueLink={this.linkState('brewerId')}/>

        <button onClick={this.createBeer}>Create!</button>
      </form>
    );
  }



});
