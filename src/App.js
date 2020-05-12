import React, { Component } from 'react';
import './App.css';
import Colorbox from './components/Colorbox'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colorBoxes: []
    }
  }

  addBox = () => {
    this.state.colorBoxes.push(<Colorbox />)
    this.setState({ colorBoxes: this.state.colorBoxes})

  }

  removeBox = () => {
    this.state.colorBoxes.pop()
    this.setState({ colorBoxes: this.state.colorBoxes})
  }
  render() {
    let boxes = this.state.colorBoxes.map((oneBox, index) => {
      return(
        <span key={ index }>{ oneBox }</span>
      )
    })
    return(
      <React.Fragment>
      <h1>Colorbox</h1>
      <button onClick={ this.addBox }>Add Box</button>
      <button onClick={ this.removeBox }>Remove Box</button>
      <div id="box-collection">
        { boxes }


      </div>

      </React.Fragment>
    )
  }

}


export default App;
