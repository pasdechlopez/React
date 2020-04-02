import React, {Component} from 'react';
import './App.css';
import CardForm from 'components/CardForm/CardForm';
import Step from 'components/Step/Step';
import PersonalForm from 'components/PersonalInfo/PersonalInfo';
// import Button from 'components/Button/Button'

class App extends Component {

   constructor() {
      super()
      this.state = {
         step: 1,
         firstName: '',
         lastName: '',
         email: '',
         cardNumber: ''
      };
   }
   //проверка адекватности ввода
   formConditions = () => {
      switch (this.state.step) {
         case 1:
            return (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.email.includes('.') && this.state.email.includes('@'));
         case 2:
            // break;
            return (this.state.cardNumber.length === 10);
         default :
            return false
      }
   };

   handleClickNextForm = () => {
      this.setState({
         step: this.state.step + 1
      })
      
   };

   handleTabClick = (tabNumber) => {
      this.setState({
         step: tabNumber
      })
   };

   handleFormChange = (name, value) => {
      this.setState({
         [name]: value
      });
   };

   formRender = () => {
      switch (this.state.step) {
         case 1:
            return <PersonalForm firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} onChangeForm={this.handleFormChange} />;
         case 2:
            return <CardForm cardNumber={this.state.cardNumber} onChangeForm={this.handleFormChange} />;
         case 3:
            return <p data-test="congratulations">Данные успешно сохранены</p>;
         default:
            return <p>Ошибка!</p>;
      }
   };

   render() {
      const thisStep = this.state.step;
      console.log(this.state.step)
      console.log(this.state.email, this.state.firstName)
      return (
         <div className="container">
            <div className="tab-panel">
               <Step number={1} isSelected={thisStep === 1} children={'Personal info'} isClickable={thisStep > 1} onClick={this.handleTabClick} />
               <Step number={2} isSelected={thisStep === 2} children={'Card info'} isClickable={thisStep > 2} onClick={this.handleTabClick} />
               <Step number={3} isSelected={thisStep === 3} children={'Success!'} />
            </div>

            <div className="form-content">
               {this.formRender()}
            </div>
            <div className="button">
               <button className="button-next" onClick={this.handleClickNextForm} disabled={!this.formConditions()} hidden={this.state.step === 3}>Next</button>
            </div>
            {/* <Button /> */}
         </div>
      );
   }
}

export default App;