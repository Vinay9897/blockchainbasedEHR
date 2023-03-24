import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "./css/DocLogin.css";

class DocLogin extends Component {
    state = { textvalue: "", formNum: false, age: 0, pat_reg_login: 0 };
    cont = this.props.state.contract;
    Acc = this.props.state.accounts;
    async checkDoc(event) {
        event.preventDefault(true);
        var result = null
        try {
            let adhaar_number = document.getElementById('doc_adhaar_number').value;
            result = await this.cont['OPT'].methods.checkDoctorInfo(adhaar_number).call({ from: this.Acc[0] });
            console.log(result);
            if (!result[0])
                alert('Invalid Credentials. Contact Respective Hospital');
            else
                this.props.onlogin(result[1], 0);
        }
        catch (err) {
            alert('Invalid Credentials. ');
        }
    }
}