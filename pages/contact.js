import Head from 'next/head'
import React from 'react'
import styles from '../styles/Contact.module.css'
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <Head>
                {/* Ganeral tags */}
                <title>Contact Me | Ayush</title>
                <meta name="description" content="Get in touch with me today and let us connect. Whether you have a question, need help with something, or just want to say hello, I am here to listen and respond to you. My contact page is your gateway to communicate with me and I am looking forward to hearing from you." />

                <meta name="keywords" content="Contact Ayush Singh, Get in Touch, Email Ayush Singh, Pandit Deendayal Energy University, Ayush, PDEU, Mechanical Engineer, Mechanical Engineering, CFD, Research, Resume, Engineering Projects, Aerospace Engineering, Fluid Mechanics, Additive Manufacturing, Propulsion Systems" />
                <meta name="author" content="Ayush Singh" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Contact Me | Ayush" />
                <meta property="og:description" content="Get in touch with me today and let us connect. Whether you have a question, need help with something, or just want to say hello, I am here to listen and respond to you. My contact page is your gateway to communicate with me and I am looking forward to hearing from you." />
                <meta property="og:image" content="https://www.theayush.in/gallery/26.jpg" />
                <meta property="og:url" content="https://www.theayush.in/contact/" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Me | Ayush" />
                <meta name="twitter:description" content="Get in touch with me today and let us connect. Whether you have a question, need help with something, or just want to say hello, I am here to listen and respond to you. My contact page is your gateway to communicate with me and I am looking forward to hearing from you." />
                <meta name="twitter:image" content="https://www.theayush.in/gallery/26.jpg" />
            </Head>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactInfo}>
                        <div className={styles.content}>
                            <h1>Contact Me</h1>
                            <br />
                            <p className={styles.contactmeText}>Not much to write here 😅 as most of the things are in the <Link href='/about' className={styles.aboutLink}>About Me</Link> page. Feel free to <span onClick={()=>{document.querySelector('form input').focus()}} className={styles.focusFormBtn}>contact me</span>!</p>
                            <p>
                                Whether you have a question, need help with something, or just want someone to play Tennis, I am here to listen and respond to you. My contact page is your gateway to communicate with me and I&apos;m looking forward to hearing from you.
                            </p>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <small>Email</small>
                                <p><a href="mailto:ayush.s181005@gmail.com" className={styles.contactFormInfoLink}>ayush.s181005@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactForm}>
                        <form action={"https://formsubmit.co/66d3f9bf18706b08086ddc2ad4403798 "} method='POST'>
                            <h2>Can&apos;t wait to see your message!</h2>
                            <div className={styles.inputBox}>
                                <label htmlFor="form-name">Name</label>
                                <input type="text" name='name' id='form-name' placeholder='Your Name please' required />
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="form-email">Email</label>
                                <input type="email" name='email' id='form-email' placeholder='Your Email here' required />
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="form-msg">Your Message:{process.env.REACT_APP_SAMPLE}</label>
                                <textarea name="msg" id="form-msg" cols="30" rows="10" placeholder='Start typing...'></textarea>
                            </div>

                            <div className={styles.inputBox}>
                                <button type="submit" className={`btn ${styles.submitBtn}`}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact