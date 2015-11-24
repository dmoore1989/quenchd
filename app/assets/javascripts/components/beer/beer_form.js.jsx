window.BeerForm = React.createClass({
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

  createBeer: function(e) {
    e.preventDefault();
    beer= {
      beer:{
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

  render: function() {
    return(

        <section className="new-item">
          <section className="new-item-header">
            <h2>NEW BEER!</h2>
            <h6>Note: Please do not create duplicate beers or home brew, they will be deleted....
            </h6>
          </section>


          <section className="landing-modal-title">
            <form className="landing-form">
              <div className="sign-up group">
                <label>Beer
                  <input type="text" valueLink={this.linkState('name')}/>
                </label>
                <label>Alcohol By Volume
                  <input type="text" valueLink={this.linkState('abv')}/>
                </label>
                <label>International Bittering Units
                  <input type="text" valueLink={this.linkState('ibu')}/>
                </label>
                <label>Style
                  <input type="text" valueLink={this.linkState('style')}/>
                </label>
                <label>Description
                  <input type="text" valueLink={this.linkState('description')}/>
                </label>
                <label>Brewer Id
                  <input type="text" valueLink={this.linkState('brewerId')}/>
                </label>

                <button className="submit-button" onClick={this.createBeer}>Create!</button>
              </div>
            </form>

          </section>
        </section>
    );
  }



});
