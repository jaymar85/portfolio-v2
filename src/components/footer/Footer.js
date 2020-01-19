import React, { Component } from 'react'
import rocket from '../../assets/rocket12.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import './footer.css'

class Footer extends Component {
    render() {
        
        return (
            <footer>
                <div className='row'>
                    <div className='social-media'>
                        <a className='btn2' href="https://twitter.com/Jeremy66630195" target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faTwitter} size='2x'/>
                        </a>
                        <a className='btn2' href='https://github.com/jaymar85' target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faGithub} size='2x'/>
                        </a>
                        <a className='btn2' href='https://www.linkedin.com/in/jeremymark/' target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faLinkedinIn} size='2x'/>
                        </a>
                    </div>
                    <div className='page-scroll'>
                        <a href='#'><img id="rocket" src={rocket} alt='rocket ship'/></a>
                        <div>
                            <p id='to-top-copy'>Beam me up, Scotty!</p>
                        </div>
                    </div>
                    <p>&#169; Jeremy Mark 2020</p>
                </div>
            </footer>
        )
    }
}

export default Footer
