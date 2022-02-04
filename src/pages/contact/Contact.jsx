import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <>
            <div className="cleanup"></div>
            <section id="contact">
                <div className="socialIcon">
                    <a href="https://web.facebook.com" target="_blank" rel="noreferrer" >
                        <i className="topIcon fab fa-facebook-square"></i>
                    </a>

                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer" >
                        <i className="topIcon fab fa-twitter-square"></i>
                    </a>

                    <a href="whatsapp://send?text=Hi, I'd love to know more about Kimuto Group, I am reaching you from your official webpage!&phone=+2348060779928" target="_blank" rel="noreferrer" >
                        <i className="topIcon fa fa-whatsapp" aria-hidden="true"></i>
                    </a>

                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" >
                        <i className="topIcon fab fa-instagram-square"></i>
                    </a>
                </div>
                <div className="contact-box"> 
                    <div className="c-heading">
                        <h1>Get in Touch</h1>
                        <p>Call or Email Us Regarding Your Need or Issue</p>
                    </div>   
                    <div className="c-inputs">
                        <form>
                            <input type="text" placeholder="Full Name" name='name' />
                            <input type="email" placeholder="email@gmail.com" name='email' />
                            <textarea name="message" placeholder="Write Message" ></textarea>
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
                <div className="map">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.103177092146!2d5.729761814294819!3d5.551720035237433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad4b0fffffff%3A0x2a124985d2df668!2sSure%20Engineering%20Construction!5e0!3m2!1sen!2sng!4v1643802691084!5m2!1sen!2sng" style={{border:"0",  width:'600px', height:"450px"}} allowFullScreen="" loading="lazy" title='direction'></iframe>
                </div>
            </section>
        </>
    )
}
