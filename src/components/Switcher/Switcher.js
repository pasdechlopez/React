import React, { Component } from "react";
import "./Switcher.css";

class Switcher extends Component {
  static displayName = "Switcher";

  state = {
    choosenComponent: 0
  };

  componentsArray = React.Children.toArray(this.props.children);

  ref = React.createRef();
  changeComponent = e => {
    const component = e.target.dataset.component;
    console.log("dataset", e.target.dataset.component);
    // component.className = 'choosen';
    this.setState(() => ({
      choosenComponent: component
    }));
    console.log("target", e.target.dataset);
  };

  render() {
    console.log("Children", this.ref);
    return (
      <div className="switcher">
        <nav>
          <ul className="switcher__list">
            {" "}
            {React.Children.map(this.componentsArray, (child, index) => {
              return (
                <li
                  ref={this.ref}
                  data-component={index}
                  className={‘list-item ${index === this.state.choosenComponent ? “chosen” : “”}’}
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
          {this.componentsArray[this.state.choosenComponent]}
        </div>
      </div>
    );
  }
}

export default Switcher;
