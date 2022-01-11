import React, { Component } from 'react';
import './Navbar.css';
import {Button} from "../Button";
import "../Button.css";
import { MenuItems } from "./MenuItems";



class Navbar extends Component {

    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className='NavbarItems'>
            <h1 className='navbar-logo'>  <img id="img" src="favicon.ico" width="40" height="40" /> </h1>
            <h2 className='h2'>SLT Enterprises</h2>

            <div className='menu-icon' onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
            </div>

            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {
                MenuItems.map((item,index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })
            }
            </ul>
            </nav>
        )
    }
}
export default Navbar