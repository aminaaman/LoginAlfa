import React, { Component } from 'react'
import Heading from 'arui-feather/heading';
import {Link } from "react-router-dom";
import Button from 'arui-feather/button';


class Profile extends Component {
    render() {
        var user = JSON.parse(localStorage.getItem('login'));
        return (
            <div style={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <div>
                <Heading size="l">Hello, {user.name}!</Heading><br/><br/>
                    <Link to="/logout">
                        <Button>Logout</Button>
                    </Link>   
                </div>
             </div>
        )
    }
}
export default Profile;
