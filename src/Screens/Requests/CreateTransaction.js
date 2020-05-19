import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

import createTransaction from './../../assets/CreateTransaction.png';

import "./../../styles/Main.scss";

import { sessionURL } from '../../Routes/sessionURL';
import { header } from '../../Routes/headers';

import axios from 'axios';

class CreateTransaction extends Component{
    constructor(props){
        super(props);
        this.state = {
            points: "",
            receiver: "",
            comment: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const url = sessionURL + "deals";
        const {points, receiver, comment} = this.state;
        const validInput = points !== "" && receiver !== "" && comment !== "";
        
        // axios.post(url, {
        //     points: points,
        //     partner_id:  receiver,
        //     comment : comment
        // }, {
        //         headers: header
        // })
        // .then(response => { 
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error.response)
        // });

        

        if(validInput){
            axios.post(url, {
                points: points,
                partner_id:  receiver,
                comment : comment
            }, {
                headers: header
            })
            .then(response => { 
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
        }
        else{
            alert("type")
        }
        // const transaction = {
        //     points: this.state.points,
        //     // partner_id: this.state.receiver,
        //     comment: this.state.comment
        // }
        // axios
        //     .post(url, {
        //         headers: header, 
        //         data: {
        //             transaction
        //         }}
        //     )
        //     .then(res => {
        //         alert("done");
        //         console.log("sucess")
                
        //     })
            // .catch(err => {
            //     alert("wrong");
            //     console.error("error: ", err)
            // })
    }
    render(){
        const {points, receiver, comment} = this.state
        return(
            <Grid divided="vertically">
                <Grid.Row columns={3}>
                    <Grid.Column width={6}>
                        <div className="centerMain">
                            <img src={createTransaction} className="imgMain" alt="icon of Add Point"/>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <div className="centerMain">
                            <div className="verticalLineMain"></div>
                        </div>
                        
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <div className="centerMain">
                            <form className="formMain formTransaction" onSubmit={this.onSubmit}>
                                <div className="verticalSpaceMain titleMain createTransaction">
                                    <h1 >Tạo giao dịch</h1>
                                </div>
                                <div className="verticalSpaceMain">
                                    <label>Điểm</label>
                                    <input 
                                        type="number"
                                        name="points"
                                        value={points}
                                        onChange={this.onChange}
                                        className="inputMain inputBorderMain"/>
                                </div>
                                
                                <div className="verticalSpaceMain">
                                    <label>Người nhận</label>
                                    <input 
                                        type="text"
                                        name="receiver"
                                        value={receiver}
                                        onChange={this.onChange}
                                        className="inputMain inputBorderMain"/>
                                </div>
                                <div className="verticalSpaceMain">
                                    <label>Tin nhắn</label>
                                    <textarea 
                                        name="comment"
                                        value={comment}
                                        onChange={this.onChange}
                                        className="input inputBorderMain textAreaMain" 
                                    />
                                </div>
                                
                                <div className="btnTest">
                                    <button type="submit" className="btnMain">Gửi</button>
                                </div>
                            </form>
                        </div>
                        
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default CreateTransaction