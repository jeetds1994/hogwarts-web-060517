import React from 'react';

class Filter extends React.Component {

  constructor(){
    super()
    this.fetchPigs = this.fetchPigs.bind(this)
    this.changeSelected = this.changeSelected.bind(this)
    this.state = {
      selected: 'all'
    }

  }

  fetchPigs(){
    this.props.onFetchPigsClick(this.state.selected)
  }

  changeSelected(event) {
    this.setState({
      selected: event.target.value
    })
  }

  render() {
    return (
      <div>
        <select onChange={this.changeSelected}>
          <option value="all">All</option>
          <option value="true">Greased</option>
          <option value="false">Ungreased</option>
        </select>
        <button onClick={this.fetchPigs}>Fetch Hogs</button>
      </div>
    )
  }
}

export default Filter;
