import React, {Component} from 'react';
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <section>
                <div className='contact-row'>
                    <div class="email-icon">
                        <i class="far fa-paper-plane"></i>
                    </div>
                
                    <h2>Lets Connect!</h2>
                    <p>Whether you have an idea for a project or just want to chat,<br/> feel free to shoot me an email!</p>
                    <a href="contact-form.html"><button>Say Hello</button></a>
                </div>
            </section>
        )
    }
}

export default Contact;