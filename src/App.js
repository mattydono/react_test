import React, { Component } from 'react';
import './App.css';
import {Selector} from "./Selector";
import {Table} from "./Table";

class App extends Component {

  state = {
    subbedPairs: new Set([]),
    selectedCurrencyPair: ''
  };

  componentDidMount() {

  }

  render() {

      const currencyPairs = ['GBPUSD', 'GBPAUD', 'USDJPY', 'AUDCAD', 'GBPEUR', 'EURUSD'];

      return (
        <div>
          <Selector
              currencyPairs={currencyPairs}
              subbedPairs={this.state.subbedPairs}
              // selectedCurrencyPair={this.selectedCurrencyPair}
              currencyChange={this.handleCurrencyChange}
          />
          <Table
              subberPairs={this.state.subbedPairs}
          />
        </div>
    );
  }

  handleCurrencyChange = (currencyPair) => {
    this.setState( () => {
     selectedCurrencyPair: currencyPair
    })
  };

}

export default App;
