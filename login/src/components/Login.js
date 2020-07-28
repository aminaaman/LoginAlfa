import React, { Component } from 'react'
import { withRouter} from 'react-router-dom';
import Form from 'arui-feather/form';
import FormField from 'arui-feather/form-field';
import Button from 'arui-feather/button';
import Label from 'arui-feather/label';
import Heading from 'arui-feather/heading';


class Login extends Component {
    constructor()
    {
        super();
        this.state ={
            name:'',
            password:''

        }
    }
    login()
    {
        console.warn(this.state);
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) =>{
            data.json().then((resp)=>{
                console.warn("resp", resp)
                if(resp.length>0){
                    console.log(this.props.history.push('/profile'));        
                }
                else{
                    alert("Please check username and password")
                }
            })
        })
    }
    render() {
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <Form>
                    <Heading size="m">Login here:</Heading>
                    <Label>Username</Label><br/>
                    <FormField>
                        <input type="text" name="user" onChange={(event)=>this.setState({name:event.target.value})}/> <br/>
                    </FormField>
                    <Label>Password</Label><br/>
                    <FormField>
                        <input type="password" name="password" onChange={(event)=>this.setState({password:event.target.value})}/> <br/>
                    </FormField>
                    <Button view='extra' type='submit' onClick={()=>this.login()}>Login</Button>
                </Form>

            </div>
        )
    }
}

export default withRouter(Login);