import Head from 'next/head'
import React, { useRef } from 'react'
import styles from '../styles/Contact.module.css'
import Link from 'next/link'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = () => {
    const recaptchaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            // 1. Execute the reCAPTCHA and get the token
            const token = await recaptchaRef.current.executeAsync();

            if (token) {
                // 2. Prepare the form data using FormData API
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
                // Add the recaptcha token to the payload for FormSubmit
                data['g-recaptcha-response'] = token;

                // 3. Send the data via fetch to FormSubmit's AJAX endpoint
                // Ensure NEXT_PUBLIC_FORMSUBMIT_KEY is defined in your .env
                const response = await fetch(`https://formsubmit.co/ajax/${process.env.FORMSUBMIT_KEY}`, {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok && result.success === "true") {
                    alert("Message sent successfully!");
                    form.reset();
                    recaptchaRef.current.reset();
                } else {
                    alert("Submission failed. Please try again.");
                }
            }
        } catch (error) {
            console.error("reCAPTCHA execution failed:", error);
            alert("An error occurred during verification.");
        }
    }

    return (
        <>
            <Head>
                <title>Contact Me | Ayush</title>
                <meta name="description" content="Get in touch with me today and let us connect." />
                <meta name="keywords" content="Contact Ayush Singh, Mechanical Engineer, PDEU" />
                <meta name="author" content="Ayush Singh" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Contact Me | Ayush" />
                <meta property="og:image" content="https://www.theayush.in/gallery/26.jpg" />
                <meta property="og:url" content="https://www.theayush.in/contact/" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactInfo}>
                        <div className={styles.content}>
                            <h1>Contact Me</h1>
                            <br />
                            <p className={styles.contactmeText}>
                                Not much to write here 😅 as most of the things are in the 
                                <Link href='/about' className={styles.aboutLink}> About Me</Link> page. 
                                Feel free to <span onClick={() => { document.getElementById('form-name').focus() }} className={styles.focusFormBtn}>contact me</span>!
                            </p>
                            <p>
                                Whether you have a question, need help with something, or just want someone to play Tennis, I am here to listen and respond to you.
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
                        <form onSubmit={handleSubmit}>
                            <h2>Can&apos;t wait to see your message!</h2>
                            
                            {/* Hidden field to prevent spam (FormSubmit feature) */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />
                            
                            <div className={styles.inputBox}>
                                <label htmlFor="form-name">Name</label>
                                <input type="text" name='name' id='form-name' placeholder='Your Name please' required />
                            </div>
                            
                            <div className={styles.inputBox}>
                                <label htmlFor="form-email">Email</label>
                                <input type="email" name='email' id='form-email' placeholder='Your Email here' required />
                            </div>
                            
                            <div className={styles.inputBox}>
                                <label htmlFor="form-msg">Your Message</label>
                                <textarea name="message" id="form-msg" cols="30" rows="10" placeholder='Start typing...' required></textarea>
                            </div>

                            <ReCAPTCHA
                                ref={recaptchaRef}
                                size="invisible"
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            />

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