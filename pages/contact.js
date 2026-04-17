import Head from 'next/head'
import React, { useRef } from 'react' // 1. Added useRef
import styles from '../styles/Contact.module.css'
import Link from 'next/link'
import ReCAPTCHA from "react-google-recaptcha"; // 2. Import ReCAPTCHA

const Contact = () => {
    const recaptchaRef = useRef(null); // 3. Create a ref

    const handleSubmit = (e) => {
        const token = recaptchaRef.current.getValue();
        if (!token) {
            e.preventDefault(); // Stop form submission if no captcha
            alert("Please complete the reCAPTCHA");
        }
        // If token exists, form continues to FormSubmit.co automatically
    };

    return (
        <>
            <Head>
                <title>Contact Me | Ayush</title>
                {/* ... existing meta tags ... */}
            </Head>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    {/* ... info section ... */}
                    
                    <div className={styles.contactForm}>
                        <form 
                            action="https://formsubmit.co/66d3f9bf18706b08086ddc2ad4403798" 
                            method='POST'
                            onSubmit={handleSubmit} // 4. Attach handler
                        >
                            <h2>Can&apos;t wait to see your message!</h2>
                            
                            {/* ... input boxes ... */}
                            <div className={styles.inputBox}>
                                <label htmlFor="form-msg">Your Message:</label>
                                <textarea name="msg" id="form-msg" cols="30" rows="10" placeholder='Start typing...'></textarea>
                            </div>

                            {/* 5. Add the reCAPTCHA widget */}
                            <div className={styles.inputBox}>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                />
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