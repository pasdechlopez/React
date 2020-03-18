import React, { Component } from 'react';
import './Switcher.css';

class Switcher extends Component {
  static displayName = 'Switcher';

  state = {
    choosenComponent: 0
  };
  ref = React.createRef();
  changeComponent = e => {
    const component = e.target.dataset.component;
    console.log('ref', this.ref.className);
    console.log('component', component);
    // component.className = 'choosen';
    this.setState(() => ({
      choosenComponent: component
    }));
  };

  render() {
    console.log('hey');
    const componentsArray = React.Children.toArray(this.props.children);
    console.log('Children', componentsArray);
    return (
      <div className="switcher">
        <nav>
          <ul className="switcher__list">
            {' '}
            {React.Children.map(componentsArray, (child, index) => {
              console.log('child', child);
              console.log('index', index);
              return (
                <li
                  ref={this.ref}
                  data-component={index}
                  className="component-list__name"
                  key={index}
                  onClick={this.changeComponent}
                >
                  {child.type.displayName || child.type.name}{' '}
                </li>
              );
            })}{' '}
          </ul>
        </nav>
        <div className="switcher__component">
          {' '}
          {componentsArray[this.state.choosenComponent]}
        </div>
      </div>
    );
  }
}

export default Switcher;
