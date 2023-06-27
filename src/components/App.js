import React, { Component } from "react";
import "../styles/App.css";
import slides from "../data/slides";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: slides,
      index: 0,
    };
  }

  handleNext = () => {
    const { index, slides } = this.state;
    if (index < slides.length - 1) {
      this.setState({ index: index + 1 });
    }
  };

  handlePrev = () => {
    const { index } = this.state;
    if (index > 0) {
      this.setState({ index: index - 1 });
    }
  };

  handleRestart = () => {
    this.setState({ index: 0 });
  };

  render() {
    const { index, slides } = this.state;
    const currentSlide = slides[index];

    return (
      <div className="App">
        <h1 id="title">{currentSlide.title}</h1>
        <p id="text">{currentSlide.text}</p>
        <button
          id="button-restart"
          onClick={this.handleRestart}
          disabled={index === 0}
        >
          Restart
        </button>
        <button
          id="button-prev"
          onClick={this.handlePrev}
          disabled={index === 0}
        >
          Prev
        </button>
        <button
          id="button-next"
          onClick={this.handleNext}
          disabled={index === slides.length - 1}
        >
          Next
        </button>
      </div>
    );
  }
}

export default App;
