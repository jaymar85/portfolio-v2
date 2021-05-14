import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            addClass: '',
            showMenu: ''
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll() {
        if (window.scrollY > 0) {
            this.setState({addClass: 'sticky'})
        } else {
            this.setState({addClass: ''})
        }
    }

    toggleMenu() {
        let { showMenu } = this.state;
        this.setState({showMenu: showMenu === 'open' ? '' : 'open'})
    }

    render() {
        return (
            <div>
                <header onScroll={this.handleScroll} className={this.state.addClass}>
                    <a href="#" className="logo">Jeremy Mark</a>
                    <nav className={this.state.showMenu}>
                        <ul>
                            <li><a href="#" className="active">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="menu-toggle" onClick={this.toggleMenu}><FontAwesomeIcon className='icon' icon={faBars} /></div>
                </header>
            </div>
        );
    }
}

export default Navbar;