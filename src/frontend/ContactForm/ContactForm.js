import React from 'react';
import Form from 'react-bootstrap/Form';
import './ContactForm.css';

export default function ContactForm() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [organisation, setOrganisation] = React.useState('');
    const [status, setStatus] = React.useState('');
    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }
    return (
        <div id="contactFormSection" className="container-fluid section">
            <h3>Find out when I'm availabile for work...</h3>
            <div className="container" id="contact-form">
                <Form
                    onSubmit={submitForm}
                    action="https://formspree.io/mgeowlnb"
                    method="POST"
                >
                    <div className="form-group" id="form-personalise">
                        <label htmlFor="FullName">Name:</label>
                        <input
                            type="name"
                            className="form-control"
                            id="FullName form-personalise"
                            placeholder="Namey McNamerson"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            name="name"
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
                            name="_replyto"
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
                            name="organisation"
                        />
                    </div>
                    <div id='submit-form-section' className="center-align-text">
                        {status === "SUCCESS" ? <h3>Thanks!</h3> : <button className="zara-button-blue">Submit</button>}
                        {status === "ERROR" && <h3>Ooops! There was an error.</h3>}
                    </div>
                </Form>
            </div>
        </div>
    )
} 