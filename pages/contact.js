import Head from 'next/head'
import React, { useRef, useState } from 'react'
import styles from '@/styles/Contact.module.css'
import Link from 'next/link'
import ReCAPTCHA from 'react-google-recaptcha'
import { MailIcon, GithubIcon, LinkedinIcon } from '@/components/Icons'

const Contact = () => {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    setStatus('sending')

    try {
      const token = await recaptchaRef.current.executeAsync()

      if (token) {
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        data['g-recaptcha-response'] = token

        const response = await fetch(`https://formsubmit.co/ajax/${process.env.FORMSUBMIT_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        })

        const result = await response.json()

        if (response.ok && result.success === 'true') {
          setStatus('sent')
          form.reset()
          recaptchaRef.current.reset()
        } else {
          setStatus('error')
        }
      }
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error)
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Ayush Singh</title>
        <meta name="description" content="Get in touch with Ayush Singh for research collaboration, questions, or a game of tennis." />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="pageContainer">
        <p className="sheetLabel">
          <span className="tick">+</span> Sheet 07 &middot; Contact
        </p>

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h1>Let&apos;s talk</h1>
            <p className={styles.copy}>
              Most of the background is already on the <Link href="/about" className={styles.inlineLink}>About</Link> and{' '}
              <Link href="/experience" className={styles.inlineLink}>Experience & Projects</Link> pages. If
              you&apos;re thinking about collaboration, have a question about the work, or just want
              someone to play tennis with &mdash; reach out.
            </p>

            <div className={styles.directList}>
              <a href="mailto:ayush.s181005@gmail.com" className={styles.directItem}>
                <MailIcon width={17} height={17} />
                ayush.s181005@gmail.com
              </a>
              <a href="https://linkedin.com/in/ayyyuusshhh" target="_blank" rel="noopener noreferrer" className={styles.directItem}>
                <LinkedinIcon width={17} height={17} />
                linkedin.com/in/ayyyuusshhh
              </a>
              <a href="https://github.com/Ayush181005" target="_blank" rel="noopener noreferrer" className={styles.directItem}>
                <GithubIcon width={17} height={17} />
                github.com/Ayush181005
              </a>
            </div>
          </div>

          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className={styles.inputBox}>
                <label htmlFor="form-name">Name</label>
                <input type="text" name="name" id="form-name" placeholder="Your name" required />
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="form-email">Email</label>
                <input type="email" name="email" id="form-email" placeholder="you@example.com" required />
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="form-msg">Message</label>
                <textarea name="message" id="form-msg" rows="6" placeholder="Start typing..." required></textarea>
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              />

              <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'sent' && <p className={styles.statusMsg}>Message sent — thank you, I&apos;ll reply soon.</p>}
              {status === 'error' && <p className={styles.statusMsgError}>Something went wrong. Please try again or email me directly.</p>}
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
