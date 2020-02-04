import React, {Component} from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <section id="about">
                <h3>About Me</h3>
                <h2>Introduction</h2>
                <div id="content-container"> 
                    <div id="img-div">
                        <img src="/img/Untitled 2.png"/>
                    </div>
                    <div id="text-div">
                        <p>I am a former Financial Services professional transitioning to a career in web development. I have always loved computers, problem solving and bringing new ideas to life. I’m a continuous learner and strive to understand the latest technologies to be better equipped and informed. I’m a hard worker that has a desire for personal growth.  I seek to work for a dynamic company with my current skills set to continue advancing as a well rounded programmer. In my free time, I enjoy spending time with close friends and family, going hiking, ping pong, working out, and traveling.</p>
                    </div>
                </div> 
            </section>
        )
    }
}

export default About;