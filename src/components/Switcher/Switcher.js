import React, { Component } from "react";
import "./Switcher.css";

class Switcher extends Component {
  static displayName = "Switcher";

  state = {
    choosenComponent: 0
  };

  componentsArray = React.Children.toArray(this.props.children);

  changeComponent = e => {
    const component = e.target.dataset.component;
    console.log("dataset", e.target.dataset.component);
    this.setState(() => ({
      choosenComponent: component
    }));
  };

  render() {
    console.log("Children", this.props.children[0]);
    console.log("Children",this.props.children);
    return (
      <div className="switcher">
        <nav>
          <ul className="switcher__list">
            {" "}
            {React.Children.map(this.props.children, (child, index) => {
              return (
                <li
                  data-component={index}
                  className={
                    `list-item ${index.toString() === this.state.choosenComponent ? 'chosen' : "component-list__name"}`
                  }
                  key={index}
                  onClick={this.changeComponent}
                >
                  {child.type.displayName || child.type.name}{" "}
                  {/* {index === this.state.choosenComponent ? child : console.log("")} */}
                </li>
              );
            })}{" "}
          </ul>
        </nav>
        <div className="switcher__component">

          {" "}
            {/* {React.Children.map(this.props.children, (child, index) =>  {index === this.state.choosenComponent ? child : console.log("")}} */}
          {/* {this.componentsArray[this.state.choosenComponent]} */}
          {this.props.children[this.state.choosenComponent]}
        </div>
      </div>
    );
  }
}

export default Switcher;
