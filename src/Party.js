import React, {Component} from "react";
import "./Party.css";

class Party extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      klass: "",
      userInput: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    const cats = this.state.cats;
    if (this.state.cats.length === 3) {
      cats.shift();
    }
    cats.push(this.state.userInput);
    this.setState({cats});
  }

  handleChange(e) {
    this.setState({userInput: e.currentTarget.value});
  }

  render() {
    return (
      <div id="container">
        <form className="form" onSubmit={this.handleInput}>
          <input
            value={this.state.userInput}
            onChange={this.handleChange}
            placeholder="Enter a cat name"
          />
          <button type="submit">Find a Kitty</button>
        </form>
        {this.state.cats.map((cat, idx) => {
          return (
            <img
              key={idx}
              alt={cat}
              src={`https://robohash.org/set_set4/bgset_bg1/${cat}`}
            />
          );
        })}
      </div>
    );
  }
}

export default Party;
