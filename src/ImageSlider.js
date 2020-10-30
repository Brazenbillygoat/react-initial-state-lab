import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor(props) {

    super()
    this.state = {
      currentSliderIndex: 0
    }
}

  render() {
    return (
      <p>I am on slide {this.state.currentSliderIndex}</p>
    )
  }
}


