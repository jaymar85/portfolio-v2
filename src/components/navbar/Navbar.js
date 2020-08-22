import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            addClass: ''
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll() {
        if (window.scrollY > 0) {
            this.setState({addClass: "sticky"})
        } else {
            this.setState({addClass: ""})
        }
    }

    render() {
        return (
            <div>
                <header onScroll={this.handleScroll} className={this.state.addClass}>
                    <a href="#" className="logo">Jeremy</a>
                    <nav>
                        <ul>
                            <li><a href="#" className="active">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="menu-toggle"><FontAwesomeIcon className='icon' icon={faBars} /></div>
                </header>
            </div>
        );
    }
}

export default Navbar;