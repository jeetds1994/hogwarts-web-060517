import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Filter from './components/filter'
import Hogs from './porkers_data'
import DisplayHogs from './components/displayHogs'

class App extends Component {
  constructor() {
    super();
    this.manageHogData = this.manageHogData.bind(this)
    this.state = {
      hogs: Hogs,
      tempHogs: [],
      selected: 'all'
    }
    //this.state.tempHogs.length === 0 ? this.state.tempHogs = this.state.hogs : null
  }

  allOrTempHogs() {
    if (this.state.selected === 'all') {
      return this.state.hogs
    } else {
      return this.state.tempHogs
    }
  }

  manageHogData(param) {
    let selectedHogs = this.state.hogs.filter(function(hog) {
      return param === 'all' ? hog : hog.greased === eval(param)
    })
    this.setState({
      tempHogs: selectedHogs,
      selected: param
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />

          < Filter onFetchPigsClick={this.manageHogData} />
          < DisplayHogs hogs={this.allOrTempHogs()}/>
      </div>
    )
  }
}

export default App;
