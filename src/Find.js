import React, { Component } from "react";

//component to get user selection of wizard group(technical term "cauldron")
//Logical Flow:
//  -user selects a cauldron from drop down list and save to state.
//  -on submit, user selection is passed up to app.js through a function in props

//what we need in this component:
//  -state
//  -some shit from props
//  -form with selecte and submit inputs

class Find extends Component {
  constructor() {
    super();
    this.state = {
      cauldronName: ""
    };
  }
  //pulls the event (on change of selection) and takes the .value from that option
  getCauldronName = e => {
    this.setState({
      cauldronName: e.target.value
    });
  };

  render() {
    const safiFunction = e => {
      this.props.getCauldronFromComponent(e, this.state.cauldronName);
    };

    return (
      <form action="">
        <select
          onChange={this.getCauldronName}
          name="wizardSelection"
          id="wizardSelection"
        >
          <option value="">PICK ONE FFS</option>
          <option value="dumbledoresArmy">Dumbledore's Army</option>
          <option value="ministryOfMagic">Ministry of Magic</option>
          <option value="orderOfThePhoenix">Order of the Phoenix</option>
        </select>

        <button onClick={safiFunction} type="submit">
          Run counter-intelligence operation
        </button>
      </form>
    );
  }
}
export default Find;
