import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem from "./components/todoitem";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Todo from "./components/Todo";
import States from "./components/state";
import Mystate from "./components/UseState";
import UseReducing from "./components/UseReducer";
import UseEffectTutorial from "./components/UseEffect";
import UseRefe from "./components/UseRef";
import UseLayoutEffects from "./components/UseLayoutEffects";
import UseImperatives from "./components/UseImperatives";
import UseContexts from "./components/UseContexts";

class App extends Component {
  state = {
    name: "james",
    age: 0,
  };
  changed = (e) => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };

  
  
  items = ["yam", "sugar", "meat", "potato"];
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>My name is james</h1>
          <p>Am a full stack web developer</p>
          <ul>
            {this.items.map(list  => (
              <div key={list}>
                <li >{list}</ li>
              </div> 
            ))}
          </ul>
            <input
              className="input"
              type="text"
              value={this.state.name}
              onChange={this.changed}
            />
            <h3>{this.state.name}</h3>
          <Todo />
          <Contact />
          <Product />
          <States />
          <Mystate />
          <UseReducing />
          <UseEffectTutorial />
          <UseRefe />
          <UseLayoutEffects />
          <UseImperatives />
          <UseContexts />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
