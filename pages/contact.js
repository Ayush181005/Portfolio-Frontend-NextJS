import Head from 'next/head'
import React from 'react'
import styles from '../styles/Contact.module.css'
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <Head>
                {/* Ganeral tags */}
                <title>Contact Me - Ayush</title>
                <meta name="description" content="Get in touch with me today and let's connect. Whether you have a question, need help with something, or just want to say hello, I am here to listen and respond to you. My contact page is your gateway to communicate with me and I'm looking forward to hearing from you." />
            </Head>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactInfo}>
                        <div className={styles.content}>
                            <h1>Contact Me</h1>
                            <br />
                            <p className={styles.contactmeText}>Not much to write here 😅 as most of the things are in the <Link href='/about' className={styles.aboutLink}>About Me</Link> page. Feel free to <span onClick={()=>{document.querySelector('form input').focus()}} className={styles.focusFormBtn}>contact me</span>!</p>
                            <p>
                                Whether you have a question, need help with something, or just want someone to play Tennis, I am here to listen and respond to you. My contact page is your gateway to communicate with me and I'm looking forward to hearing from you.
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
                        <form action={"https://formsubmit.co/ayush.s181005@gmail.com"} method='POST'>
                            <h2>Can't wait to see your message!</h2>
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