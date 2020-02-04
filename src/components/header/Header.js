import React, {Component} from 'react';
import Nav from '../nav/Nav'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div id="showcase">
                <Nav/>
                    <div className="headline">
                        <p id="typewriter"><span></span></p>
                    </div>
                <h1>Jeremy Mark</h1>
                <div id="icons">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/jeremymark/"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://github.com/jaymar85"><i class="fab fa-github"></i></a></li>
                    </ul> 
                </div>
            </div>
        )
    }
}

export default Header;