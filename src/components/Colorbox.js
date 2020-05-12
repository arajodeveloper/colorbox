import React, { Component } from 'react';
import '../App.css';

class Colorbox extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors : ["red", "orange", "yellow",
      "green", "blue", "purple", "pink"],
      currentColor : "white",
      currentIndex: 0
    }
  }

    //iterating each color in colors
    changeColor = () => {
      let { currentIndex, colors } = this.state
      if(currentIndex < colors.length) {
        this.setState({
          currentIndex: currentIndex + 1,
          currentColor: colors[currentIndex]

        })

      } else {
        this.setState({
          currentIndex: 1,
          currentColor: colors[0]
        })
      }
    }
  render() {
    return(
      <>
      <div id="box"
      style={{ backgroundColor: this.state.currentColor }}
      onClick={ this.changeColor }
      >
      { this.state.currentColor }
      </div>
      </>
    )
  }

}


export default Colorbox;
