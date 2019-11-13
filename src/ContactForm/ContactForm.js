import React from 'react';
import Form from 'react-bootstrap/Form';


export default function ContactForm() {

    return (
        <div id="section4" className="container-fluid">
            <div className="container-fluid center-align-text">
                <h3>Drop me a line...</h3>
            </div>
            <div className="container" id="contact-form">

                <Form>
                    <div className="form-group" id="form-personalise">
                        <label for="FullName">Name</label>
                        <input type="name" class="form-control" id="FullName form-personalise"
                            placeholder="Namey McNamerson" />
                    </div>
                    <div className="form-group">
                        <label for="Email" id="form-personalise">Email</label>
                        <input type="name" class="form-control" id="FullName form-personalise" placeholder="Namey@e.mail" />
                    </div>
                    <div className="form-group">
                        <label for="message" id="form-personalise">Message</label>
                        <textarea class="form-control" id="message form-personalise" rows="5"></textarea>
                    </div>
                    <div className="center-align-text">
                        <button type="submit" class="btn" id="resume-button">Submit</button>
                    </div>
                </Form>
            </div>
        </div>

    )
} 