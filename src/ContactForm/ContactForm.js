import React from 'react';
import Form from 'react-bootstrap/Form';
import './ContactForm.css';

export default function ContactForm() {

    return (
        <div id="contactFormSection" className="container-fluid section">
            <div className="container-fluid center-align-text titleText">
                <h3>Find out when I'm availabile for work...</h3>
            </div>
            <div className="container" id="contact-form">

                <Form>
                    <div className="form-group" id="form-personalise">
                        <label for="FullName">Name:</label>
                        <input
                            type="name"
                            class="form-control"
                            id="FullName form-personalise"
                            placeholder="Namey McNamerson"
                        />
                    </div>
                    <div className="form-group" id="form-personalise">
                        <label for="Email">Email:</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email form-personalise" placeholder="Namey@e.mail"
                        />
                    </div>

                    <div className="form-group" id="form-personalise">
                        <label for="Organisation" id="organisation">Organisation:</label>
                        <input
                            type="name"
                            class="form-control"
                            id="Organisation form-personalise" placeholder="Where you work"
                        />
                    </div>
                    <div className="center-align-text">
                        <button type="submit" class="btn" id="zara-button">Submit</button>
                    </div>
                </Form>
            </div>
        </div>
    )
} 