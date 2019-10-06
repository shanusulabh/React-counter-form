import React from 'react';
import * as css from './form1.css'

class FormResContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            'isCorrectEmail': true,
            'email': {
                "name": '',
                "domain": ''
            },
            'password': ''
        }
    }

    updateState = (e, inputType)=> {
        e.persist();
        let newState = {...this.state};
        if(inputType === 'email') {
            console.log(e.target.value);
            if(e.target.value.includes('@') && !e.target.value.indexOf('@') == 0) newState.isCorrectEmail = true;
            else newState.isCorrectEmail = false;
            if(!e.target.value) {
                if(newState.password) newState.isCorrectEmail = false;
                else newState.isCorrectEmail = true;
                newState.email.domain = ''; 
            }
            newState.email.name = e.target.value;
        }
        else newState.password = e.target.value
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
        return (
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-25">
                            <label>Email</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="email" value={this.state.email.name} 
                            placeholder="Your Email.." onChange={(e)=> this.updateState(e, 'email')} />
                        </div>
                        {!this.state.isCorrectEmail && <div className="col-75">
                            <span style={{color:'red'}}>Please Enter Valid Email</span>
                        </div>}
                    </div>
                    {this.state.email.domain && <div className="row">
                        <div className="col-25">
                            <label>Domain</label>
                        </div>
                        <div className="col-75">
                            <input type="text" value={this.state.email.domain} style={{backgroundColor:'#ccc'}} readOnly />
                        </div>
                    </div>}
                    <div className="row">
                        <div className="col-25">
                            <label>Password</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="password" value={this.state.email.password} 
                            placeholder="Your password.." onChange={(e)=> this.updateState(e,'password')} />
                        </div>
                    </div>
                    <div className="row">
                        <button onClick={this.login} disabled={!this.state.isCorrectEmail} 
                        className={this.state.isCorrectEmail ? 'buttonClass' : 'buttonError'}> Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
                                
export default FormResContainer;