import React from 'react';
import FormPresentational from './FormPresentaionalData';

class AddDataInFormContainer extends React.Component {
    isCorrectEmail = true;
    userStoreData = [];
    constructor() {
        super();
        this.state = {
            'email' : '',
            'password': ''
        }
    }

    updateState= (e, inputType) => {
        e.persist();
        let newState = {...this.state};
        if(inputType === 'email') {
            if(e.target.value.includes('@') && !e.target.value.indexOf('@') == 0) this.isCorrectEmail = true;
            else this.isCorrectEmail = false;
            if(!e.target.value) {
                if(newState.password) this.isCorrectEmail = false;
                else this.isCorrectEmail = true;
            }
            newState.email = e.target.value;
        }
        else newState.password = e.target.value
        this.setState(newState);
    }

    login=(e) => {
        e.preventDefault();
        let newState= {...this.state};
        console.log("login clicked...");
        if(newState.email && newState.password) {
            newState.displayUser = true;
            this.userStoreData.push({'email': newState.email, 'password':newState.password});
            newState.userStoreData = this.userStoreData;
            this.setState(newState);
        }
        else if(!newState.email) alert("Please Enter Email.");
        else alert("Please Enter Password.");
    }

    render() {
        return(
            <FormPresentational 
                updateState = {this.updateState}
                login = {this.login}
                email = {this.state.email}
                password = {this.state.password}
                isCorrectEmail = {this.isCorrectEmail}
                displayUser = {this.state.displayUser}
                userTableData = {this.userStoreData}
                delete ={this.delete}
            />
        )
    }
}

export default AddDataInFormContainer;