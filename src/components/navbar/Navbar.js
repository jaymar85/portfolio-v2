import React, {Component} from 'react';
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
                <header>
                    <a href="#" className="logo">Logo</a>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Navbar;