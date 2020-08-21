import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false,
            className: 'sticky'
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY < 0;
            if(!scrollTop) {
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false });
            }
        })
    }

    render() {
        return (
            <div id="showcase">
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