import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '@/styles/About.module.css'

const About = () => {
  return (
    <>
        <Head>
            <title>About Me - Ayush</title>
            <meta name="description" content="I am a student right now and always, wanting to learn as many things I can!" />
        </Head>
        <section className={styles.aboutSection}>
        <h1>About Me!</h1>
            <Image src='/aboutme-img.png' alt='Me' className={styles.aboutmeImage} width={300} height={400.91} priority />
            <p>
                Hi, I am <b>Ayush</b>. I am a student and have a great passion for programming. I have been learning various programming languages for several years now, including C, C++, C#, Java, JavaScript, and Python. My expertise lies in web development and I have been honing my skills in this field for quite some time now. I am well-versed in using frameworks like Django, Flask, and React to create visually stunning and user-friendly websites.
            </p>
            <p>
                My interest in programming and web development started at a young age, and I have been dedicated to expanding my knowledge and skills ever since. I have worked on various projects, such as creating websites for small businesses and designing interactive web applications for different purposes. I am constantly learning new technologies and tools to improve my development skills, and I believe that this continuous learning and development is essential to staying ahead in this field.
            </p>
            <p>
                Apart from programming, I also have an interest in art and enjoy playing lawn tennis. I am fascinated by Robotics and Space Science and Astronomy, I even enjoy watching different celestial objects using telescope. I believe that having diverse interests and hobbies helps to keep me well-rounded and motivated.
            </p>
            <p>
                I am a dedicated student and take my studies seriously. I am always looking for ways to improve and learn new skills. I believe that my technical abilities, well-rounded interests, and motivation make me a valuable asset to any team or project. Furthermore, my deep interest in robotics, space science and astronomy, and my inquisitive and curious nature further set me apart from others. I am excited to take on new challenges and opportunities in the future and I am confident that my skills and passion will allow me to excel in any field I choose to pursue.
            </p>

            <div className={styles.iconContainer}>
                <a href="https://github.com/Ayush181005" target="_blank" rel="noopener noreferrer" aria-label="Github">
                    <Image src='/icons/github.svg' width={70} height={70} className={styles.aboutmeIcon} alt='Github Icon' />
                </a>

                <a href="https://stackoverflow.com/users/15543100/ayush?tab=profile" target="_blank" rel="noopener noreferrer" aria-label="StackOverflow">
                    <Image src='/icons/stack-overflow.svg' width={70} height={70} className={styles.aboutmeIcon} alt='StackOverflow icon' />
                </a>
            </div>
        </section>
    </>
  )
}

export default About