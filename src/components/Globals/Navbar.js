//These are elements that will be used frequentl by other sections so we put them in Global folder

//rcc for class bsaed component of rfc for function based component. For this we are initiating a rcc
import React, { Component } from 'react'
import {Link} from 'gatsby';
import logo from '../../images/logo.svg';
import {FaCartArrowDown} from 'react-icons/fa';


export default class Navbar extends Component {

    /*We are initiating the states in a key-value pairs for our navbar component. Primarily speaking we have a boolena we can toggle between 
true/ false (toggling the hamburger menu), a css key for us to to define the bootstrap attribute, a key of links that
includes an array of information about each potential link*/
state= {
    navbarOpen:false,
    css: 'collapse navbar-collapse',
    links: [
        {
            id:1,
            path: '/',
            text:'Home'
        },
        {
            id:2,
            path:'/about',
            text:'About'
        }
    ]
};
/*This is a method to handle how our navbar behaves when toggling. We are checking if the the navbarOpen value
is true/false. We are basically toggling its boolean value everytime the hamburger button is being pressed on
We also keep changing the css value to collapse and collapse show*/
navbarHandler = () =>{
    this.state.navbarOpen
        ? this.setState({ //if true do this
            navbarOpen:false,
            css: "collapse navbar-collapse"
        })
        : this.setState({ //if not true do this
            navbarOpen:true,
            css: "collapse navbar-collapse show"
        });
};

    render() {
        return (
            <nav className="nav navbar-expand-sm bg-light navbar-light">
                <Link to="/" className="navbar-brand">
                   <img src={logo} alt="logo" /> 
                   {/*https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
                </Link>
                <button className="navbar-toggler"
                        type="button" 
                        onClick={this.navbarHandler}>
                            <span className="navbar-toggler-icon"></span>
                </button>
    {/*We are also using the attribute values that the state variable is hosting for us. We are able to iterate
    over the links array via the this.state.links.map(()=>{}) function to iterate over each link*/}
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto">
                        {this.state.links.map(link =>{
                            return (
                            <li key={link.id} className="nav-item">
                                <Link to={link.path}  className="nav-link text-capitalize">
                                    {link.text}
                                </Link>
                            </li>
                            );
                        })}
                        <li className="nav-item ml-sm-5">
                            <FaCartArrowDown className="cart-icon" />
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
}

