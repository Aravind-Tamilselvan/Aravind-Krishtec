import React from 'react'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <>
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <div className="contact-section">
                <div className="input-tags">
                    <input type="text" placeholder="Enter your Name" className="fname"/>
                    <input type="email" placeholder="Enter your email" className="email"/>
                    <input type="number" placeholder="Enter your mobile Number" className="number"/>
                    <input type="text" placeholder="Email Subject" className="subject"/>                
                    <textarea placeholder="Your Message..." id="textarea"></textarea>
                </div>
            </div>
            <button>Submit</button>
        </div>
    </>
  )
}

export default ContactPage