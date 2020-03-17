import React, { Component } from "react";
import "./Switcher.css";

class Switcher extends Component {
  static displayName = "Switcher";

  state = {
    choosenComponent: 0
  };

  changeComponent = e => {
    const component = e.target.dataset.component;
    this.setState(() => ({
      choosenComponent: component
    }));
  };

  render() {
    console.log("hey");
    const componentsArray = React.Children.toArray(this.props.children);
    return (
      <div className="switcher">
        <nav>
          <ul className="switcher__list">
            {" "}
            {React.Children.map(componentsArray, (child, index) => {
              return (
                <li
                  data-component={index}
                  className="component-list__name"
                  key={index}
                  onClick={this.changeComponent}
                >
                  {child.type.displayName || child.type.name}{" "}
                </li>
              );
            })}{" "}
          </ul>
        </nav>
        <div className="switcher__component">
          {" "}
          {componentsArray[this.state.choosenComponent]}
        </div>
      </div>
    );
  }
}

export default Switcher;
