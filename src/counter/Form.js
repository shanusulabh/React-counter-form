import React from 'react';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            'isCorrectEmail' : true,
            'email': {
                "name":'',
                "domain": ''
            },
            'password': ''
        }
    }
    updateState = (e, inputType)=> {
        let newState = {...this.state};
        if(inputType === 'email') {
            if(e.target.value.includes('@') && !e.target.value.indexOf('@') == 0) {
                newState.isCorrectEmail = true;
                // let afterD;
                // let domainIndex = e.target.value.indexOf('@');
                // if(domainIndex >0) { afterD = e.target.value.substr(domainIndex,(e.target.value.length - domainIndex));}
                // newState.email.name = e.target.value;
                // newState.email.domain = afterD;
                // newState.email.name = e.target.value;
            }
            else newState.isCorrectEmail = false;
            if(!e.target.value) {newState.email.domain = '';}
            newState.email.name = e.target.value;
        }
        else {
            newState.password = e.target.value}
        this.setState(newState);
    }

    login = (e) => {
        e.preventDefault();
        let newState = {...this.state};
        if(!newState.email.name) return alert("please Enter Email.");
        if(!newState.password) return alert("please Enter Password.");
        if(newState.email.name && newState.password) {
            let domainIndex = newState.email.name.indexOf('@');
            newState.email.domain = newState.email.name.substr(domainIndex, newState.email.name.length - domainIndex);
            newState.email.name = newState.email.name.substr(0, domainIndex);
            this.setState(newState);
        }
    }
    
    render() {
        console.log("state data :", this.state);
        return (
            <form>
                <div style={{width: '500px', textAlign:'center'}}>
                    <div style={{float: 'left', width: '200px'}}>
                        <label style={{textAlign:'center'}}>Email</label><br/>
                        <input type="text" name="email" value={this.state.email.name} onChange={(e) =>this.updateState(e, 'email')} style={{marginRight:'8px'}}></input><br/>
                        {!this.state.isCorrectEmail && <label style={{color:'red'}}>Please Enter Valid Email</label>}
                    </div>
                    {this.state.email.domain && <div style={{float: 'left', width: '300px'}}>
                        <label style={{textAlign:'center'}}>Domain Name</label><br/>
                        <input readOnly style={{marginRight:'8px'}} value={this.state.email.domain}></input>
                    </div>}
                    <div style={{float: 'left', width: '200px'}}>
                        <label style={{textAlign:'center'}}>Password</label><br/>
                        <input type="text" name="password" value={this.state.password.name} onChange={(e) => this.updateState(e, 'password')} style={{marginRight:'8px'}}></input>
                    </div>
                    <div style={{float: 'left', width: '300px'}}>
                        <br/>
                        <button onClick= {this.login} disabled={!this.state.isCorrectEmail}>Login</button>
                    </div>
                </div>
            </form>
        )
    }

}

export default FormContainer;