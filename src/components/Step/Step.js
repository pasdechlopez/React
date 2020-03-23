import React, {Component} from 'react';
import './Step.css';

class Step extends Component {
   handleClick = () => {
      const {number, isClickable, onClick} = this.props;
      if (isClickable) {
         onClick(number)
      }
   };

   render() {
      const {
         number,
          children,
           isSelected,
            isClickable} = this.props;
      return (
         // <div className={'step' + (isSelected ? ' step-selected' : (isClickable ? ' step-clickable' : ''))} onClick={this.handleClick}>
         <div className = {` step ${isSelected ? 'step-selecter' : ''} 
         ${isClickable ? 'step-clickable' : ''}`} >
          <p className="step__number">
               {number}
            </p>
            <p className="step__title">
               {children}
            </p>
         </div>
      );
   }
}

export default Step;