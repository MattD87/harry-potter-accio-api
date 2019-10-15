import React, { Component } from "react";
import Find from "./Find";
import Jerks from "./Jerks";
import axios from "axios";
import "./App.css";

//API call to HP api to get all characters and store them in state
//get user selection and store in state
//filter list of all characters down to selected group
//filter those characters down to death eaters/SPIES and save to state
//render them to the page

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      spies: []
    };
  }

  componentDidMount() {
    axios({
      url: `https://www.potterapi.com/v1/characters`,
      method: "GET",
      dataResponse: "json",
      params: {
        key: "$2a$10$QTTp9tiCR8CNBsj3iA5IR.jJhfdT2FKcAnZsP2gYYGaI27KsGEVwy"
      }
    }).then(response => {
      console.log(response.data);
      this.setState({
        characters: response.data
      });
    });
  }

  getCauldronFromComponent = (e, cauldronName) => {
    e.preventDefault();
    // console.log(cauldronName);
    this.filterWizards(cauldronName);
  };

  filterWizards = whichCauldron => {
    const copyOfCharacters = [...this.state.characters];
    // below is same as above, above is newer
    // const copyAgain = Array.from(this.state.characters)
    const chosenWizards = copyOfCharacters.filter(wizard => {
      return wizard[whichCauldron] === true;
    });
    const shitHeads = chosenWizards.filter(deathEater => {
      return deathEater.deathEater === true;
    });
    this.setState({
      spies: shitHeads
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Let's Get These Motherfuckers</h1>
        <Find getCauldronFromComponent={this.getCauldronFromComponent} />
        <Jerks shitHeads={this.state.spies} />
      </div>
    );
  }
}

export default App;
