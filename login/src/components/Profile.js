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
                    <Heading size="l">Hello, {user[0].name}!</Heading><br/>
                    <img alt="logo" src="https://afk.kz/9af20fce3226a2c8b3744aed6e0b9332.png" width={500} height={300}/><br/><br/>
                    <Link to="/logout">
                        <Button>Logout</Button>
                    </Link>   
                </div>
             </div>
        )
    }
}
export default Profile;
