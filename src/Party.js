import React, {Component} from "react";
import "./Party.css";

class Party extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      klass: "bounce",
      userInput: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.update = this.update.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    const cats = this.state.cats;
    if (this.state.cats.length === 9) {
      cats.shift();
    }
    cats.push({name: this.state.userInput, klass: this.state.klass});
    this.setState({cats, userInput: "", klass: "bounce"});
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div id="container">
        <form className="form" onSubmit={this.handleInput}>
          <input
            className="form-field"
            value={this.state.userInput}
            onChange={this.update("userInput")}
            placeholder="Enter a cat name"
          />
          <select
            className="form-field"
            value={this.state.klass}
            onChange={this.update("klass")}
          >
            <option value="bounce">Bounce!</option>
            <option value="spin">Spin!</option>
            <option value="flip">Flip!</option>
            <option value="blink">Blink!</option>
          </select>
          <button className="form-field" type="submit">
            Find a Dancer!
          </button>
        </form>
        <div id="party">
          {this.state.cats.map((cat, idx) => {
            return (
              <img
                alt="dancing cat"
                key={idx}
                src={`https://robohash.org/set_set4/bgset_bg1/size_300x300/${
                  cat.name
                }`}
                className={`cat ${cat.klass}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Party;
