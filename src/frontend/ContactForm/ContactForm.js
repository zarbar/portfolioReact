import React from 'react';
import Form from 'react-bootstrap/Form';
import './ContactForm.css';

export default function ContactForm() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [organisation, setOrganisation] = React.useState('');


    const submitForm = () => {
        console.log({ name, email, organisation });
        fetch('/send', {
            method: "POST",
            body: JSON.stringify({ name, email, organisation }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => (response.json()))
    }

    return (
        <div id="contactFormSection" className="container-fluid section">
            <div className="container-fluid center-align-text titleText">
                <h3>Find out when I'm availabile for work...</h3>
            </div>
            <div className="container" id="contact-form">

                <Form onSubmit={() => submitForm()} method="POST">

                    <div className="form-group" id="form-personalise">
                        <label htmlFor="FullName">Name:</label>
                        <input
                            type="name"
                            className="form-control"
                            id="FullName form-personalise"
                            placeholder="Namey McNamerson"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group" id="form-personalise">
                        <label htmlFor="Email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email form-personalise" placeholder="Namey@e.mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group" id="form-personalise">
                        <label htmlFor="Organisation" id="organisation">Organisation:</label>
                        <input
                            type="name"
                            className="form-control"
                            id="Organisation form-personalise" placeholder="Where you work"
                            value={organisation}
                            onChange={e => setOrganisation(e.target.value)}
                        />
                    </div>

                    <div className="center-align-text">
                        <button type="submit" className="btn" id="zara-button" onClick={() => submitForm()}>Submit</button>
                    </div>
                </Form>
            </div>
        </div>
    )
} 