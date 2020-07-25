import React, { Component } from 'react'
import rocket from '../../assets/rocket12.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import './footer.css'

class Footer extends Component {

    constructor() {
        super()
        this.state = {
            idName: 'notDisplayText'
        }
    }
    showText = () => {
        this.setState({idName: 'displayText'})
    }

    hideText = () => {
        this.setState({idName: 'notDisplayText'})
    }

    render() {

        return (
            <footer>
                <div className='row'>
                    <div className='social-media'>
                        <a className='btn2' href="https://twitter.com/Jeremy66630195" target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faTwitter} />
                        </a>
                        <a className='btn2' href='https://github.com/jaymar85' target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faGithub} />
                        </a>
                        <a className='btn2' href='https://www.linkedin.com/in/jeremymark/' target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faLinkedinIn} />
                        </a>
                    </div>
                    <div className='page-scroll'>
                        <a href='#'>
                        <img id="rocket" 
                        src={rocket} 
                        alt='rocket ship'
                        onMouseOver={this.showText}
                        onMouseOut={this.hideText}
                        />
                        </a>
                        <div>
                            <p id={this.state.idName}>Beam me up, Scotty!</p>
                        </div>
                    </div>
                    <p>&#169; Jeremy Mark 2020</p>
                </div>
            </footer>
        )
    }
}

export default Footer
