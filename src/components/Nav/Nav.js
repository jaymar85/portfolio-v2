import React, {Component} from 'react';
import './nav.css'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="brand">
                        <h2>Jeremy Mark</h2>
                    </div>
                    <div className="menu-right">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;