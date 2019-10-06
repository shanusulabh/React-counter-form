import React from 'react';
import * as css from './style.css'

const FormPresentaionalData = (props) => {
    console.log("props data :", props);
    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-25">
                        <label>Email</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="email" value= {props.email}
                            placeholder="Your Email.." onChange={(e) => props.updateState(e, 'email')} />
                    </div>
                    {!props.isCorrectEmail && <div className="col-75">
                        <span style={{ color: 'red' }}>Please Enter Valid Email</span>
                    </div>}
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Password</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="password" value={props.password}
                            placeholder="Your password.." onChange={(e) => props.updateState(e, 'password')} />
                    </div>
                </div>
                <div className="row">  
                    <button onClick={props.login} disabled={!props.isCorrectEmail }
                    className={props.isCorrectEmail? 'buttonClass': 'buttonError'}> Submit</button>
                </div>
            </form>
            {(props.displayUser && props.userTableData.length > 0) && <div className="row">  
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Delete</th>
                            </tr>
                            {
                                props.userTableData.map((data, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{data.email}</td>
                                            <td>{data.password}</td>
                                            <td>
                                                <button onClick={()=>props.delete(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </thead>
                    </table>
            </div>}
        </div>
    )
}

export default FormPresentaionalData;