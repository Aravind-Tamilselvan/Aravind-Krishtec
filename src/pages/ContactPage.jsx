import React from 'react'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <>
        <div class="contact" id="contact">
            <h1>Contact Me</h1>
            <div class="contact-section">
                <div class="input-tags">
                    <input type="text" placeholder="Enter your Name" class="fname"/>
                    <input type="email" placeholder="Enter your email" class="email"/>
                    <input type="number" placeholder="Enter your mobile Number" class="number"/>
                    <input type="text" placeholder="Email Subject" class="subject"/>                
                    <textarea placeholder="Your Message..." id="textarea"></textarea>
                </div>
            </div>
            <button>Submit</button>
        </div>
    </>
  )
}

export default ContactPage