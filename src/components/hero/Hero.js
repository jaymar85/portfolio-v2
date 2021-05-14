import React, {Component} from 'react';
import './hero.css'

class Hero extends Component {
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
            <div>Hero</div>
        );
    }
}

export default Hero;