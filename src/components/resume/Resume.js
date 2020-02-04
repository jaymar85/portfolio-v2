import React, { Component } from 'react'
import './Resume.css'

class Resume extends Component {
    render() {
        return (
            <div class="pimg1">
                <div class="ptext">
                    <h2>Check out my resume!</h2>          
                </div>
                <div class="resume-btn">
                    <a href="/assets/JeremyMark_WebDev_Resume.pdf" target="_blank"><button>Grab A Copy</button></a>
                </div>
            </div>
        )
    }
}

export default Resume;
