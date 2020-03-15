import React, {Component} from 'react'

class Button extends Component {
    render() {
        return (
            console.log(this.state.step)
        // <div className="button-panel">
        //   <button className="button-next" onClick={this.props.handleClickNextForm} disabled={!this.props.formConditions} hidden={this.state.step === 3}>Next</button>
        // </div>
     )
}
}

export default Button;