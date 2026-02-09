import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const toggleShort = () => {
    // const detail = document.querySelector('#detail');
    const short = document.querySelector('#short');
    
    if (short.style.display === 'none') {
      // detail.style.display = 'block';
      short.style.display = 'block';
    }
    else {
      // detail.style.display = 'none';
      short.style.display = 'none';
    }
  }

  return (
    <>
      <Head>
        <title>About Me | Ayush | Mechanical Engineering | PDEU</title>
        <meta name="description" content="Websites are a way to express the art and the skills of any a person, and so is this. Have a look at mine! I am a Passionate Mechanical Engineering Student at Pandit Deendayal Energy Unievrsity, and interests are Aerospace Engineering, Fluid Mechanics, Heat Transfer, and Additive Manufacturing. Explore my work in CFD simulations, propulsion systems, LPBF research, and programming. Join me in pushing the boundaries of engineering and innovation! 🚀🔬" />

        <meta name="keywords" content="Pandit Deendayal Energy University, Pandit Deendayal Petroleum University, Ayush, PDEU, PDPU, Mechanical Engineer, Mechanical Engineering, CFD, Research, Resume, Engineering Projects, Aerospace Engineering, Fluid Mechanics, Additive Manufacturing, Propulsion Systems" />
        <meta name="author" content="Ayush Singh" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Ayush | Mechanical Engineering | PDEU" />
        <meta property="og:description" content="Websites are a way to express the art and the skills of any a person, and so is this. Have a look at mine! I am a Passionate Mechanical Engineering Student at Pandit Deendayal Energy Unievrsity, and interests are Aerospace Engineering, Fluid Mechanics, Heat Transfer, and Additive Manufacturing. Explore my work in CFD simulations, propulsion systems, LPBF research, and programming. Join me in pushing the boundaries of engineering and innovation! 🚀🔬" />
        <meta property="og:image" content="https://www.theayush.in/gallery/26.jpg" />
        <meta property="og:url" content="https://www.theayush.in/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayush | Mechanical Engineering | PDEU" />
        <meta name="twitter:description" content="Websites are a way to express the art and the skills of any a person, and so is this. Have a look at mine! I am a Passionate Mechanical Engineering Student at Pandit Deendayal Energy Unievrsity, and interests are Aerospace Engineering, Fluid Mechanics, Heat Transfer, and Additive Manufacturing. Explore my work in CFD simulations, propulsion systems, LPBF research, and programming. Join me in pushing the boundaries of engineering and innovation! 🚀🔬" />
        <meta name="twitter:image" content="https://www.theayush.in/gallery/26.jpg" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.glowContainer}>
          <div className={styles.glow}></div>
        </div>

        <div className={styles.introContainer}>
          <div className={styles.content}>
            <h1>Hi, I&apos;m <span className={styles.name}>Ayush</span>!!!</h1>

            <div className={styles.iconContainer}>
                <a href="https://linkedin.com/in/ayyyuusshhh" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                    <Image src='/icons/linkedin.svg' width={70} height={70} className={styles.aboutmeIcon} alt='Linkedin icon' />
                </a>

                <a href="https://instagram.com/ayyyuusshhh_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Image src='/icons/instagram.svg' width={70} height={70} className={styles.aboutmeIcon} alt='Instagram icon' />
                </a>

                <a href="/docs/Ayush Singh CV.pdf" target="_blank" aria-label="Resume">
                    <Image style={{borderRadius: "13px"}} src='/icons/CV.jpg' width={70} height={70} className={styles.aboutmeIcon} alt='DownloadResume icon' />
                </a>
            </div>
          </div>
        </div>

        <section className={styles.aboutSection}>
          <p>
            {/* Heyy, I&apos;m <b>Ayush</b>,  */}
            If you are here, you probably want to know me or you opened the site by mistake, anyways, I want to thank you to reach here. If you want a smaller summary click <a role='button' className={styles.readBrief} onClick={toggleShort}>here!</a>, and if you are okay with a long read, then keep reading!
          </p>
          <div className={styles.short} id="short" style={{display: "none"}}>
            <p>
              My journey as a Mechanical Engineering student at PDEU is defined by a rigorous, hands-on pursuit of aerospace innovation and advanced material research 🚀. From my first day of college, I immersed myself in the complexities of additive manufacturing, spending two years developing real-time monitoring systems and process maps for Laser Powder Bed Fusion (LPBF) of biocompatible ZK60 magnesium alloy implants. This deep dive into material science culminated in a review paper on hot cracking, which I presented at the prestigious IMECE-INDIA 2025 conference 📄. Simultaneously, I channeled my passion for aerospace into founding Zenith, my university’s student rocketry team, and serving as a core member of the Apogee3 society. In these roles, I moved beyond theoretical coursework to master rocket design, propulsion analysis, and avionics, while also completing specialized technical courses from ISRO and various IITs. My research capabilities were further recognized during a summer internship at IIT Gandhinagar, where I won the Bhalodia-Khetan Summer Research Excellence Award for my CFD modeling of snow avalanches 🏆. Currently, I am expanding on this foundation by working on novel TPMS structures for heat exchangers and biomechanical implants, always aiming to solve real-world problems through engineering excellence 🔬.
            </p>
            <p>
              What truly distinguishes my engineering approach, however, is a multidisciplinary philosophy that bridges the gap between high-level computation and creative visualization—a blend of Science, Technology, Engineering, Art, and Math (STEAM) 🧩. My technical toolkit is sharpened by years of programming experience in Python, C++, MATLAB, and Java, which I have applied to build flight computer software and develop Artificial Neural Network (ANN) models for Multi-Effect Desalination systems 💻. Yet, it is my background in fine arts—honed at the Kanoria Center for Arts—that provides my unique edge, allowing me to visualize and design complex geometries that others might miss 🎨. This creative mindset is balanced by the discipline and leadership I exercise as the Lawn Tennis Secretary at my university, where I learned the value of mental toughness and team management 🎾. By integrating these diverse influences—computational logic, artistic intuition, and athletic discipline—I strive to create innovative, tangible solutions that push the boundaries of energy, aerospace, and healthcare.
            </p>

          The longer version starts here...
          </div>
          <div id="detail" className={styles.detail}>
            <p>
              <span className={styles.pTitle}>ME</span><br />
              What I am is reflection of my journey till now, so here I have my 20+ years in a few words.<br />The only motto in my story, especially when making choices, is to pick what makes me happy right now instead of worrying about the long term. Somehow, that path has always proven to be exactly the right direction for me. Fun and enjoyment drive the plot, though luck has been a key factor since my childhood. I was lucky to find open doors, but I had the hunger to learn and grab every single opportunity that appeared. As a curious adventurer, I have grown my skills across the entire landscape of STEAM. I usually describe myself as a simple combination of science, art, tennis, and happiness.
            </p>
            <p>
              <span className={styles.pTitle}>Science</span><br />
              I used to be an above-average student in my school. I still remember, I would study every chapter even if the syllabus didn&apos;t have them, just because it was fun. I used to read physics over and over again, while other subjects were still waiting to be studied. The curiosity to understand how things work and how the universe functions still drives me crazy, pushing me to learn something new every now and then. I then joined SciKnowTech, an experiential science center, where I delved into science even more deeply by learning STEM concepts through real experiments and projects. For school projects, my craft and science skills helped me make models and participate in science fairs, like the Maker-Fair and the SciKnowTech year-end carnival. Later, I won many science competitions and quizzes, and I was selected for national competitions like the Children Innovation Festival (CIF) 2k19. Also, my interest in astronomy and astrophysics led me to participate in conferences and star-gazing events with Tanmaye&apos;s Amazing Space and the Big Bang Astronomy Club. I even interned at Tanmaye&apos;s Amazing Space, where I got the chance to work on a project to learn and develop content about the Sun. I was also part of the science club in my school, where conducting experiments and workshops for other students helped me develop my communication skills while sharing my knowledge. Science has always been a huge part of my life, and it continues to be a source of inspiration and joy for me.
            </p>
            <p>
              <span className={styles.pTitle}>Engineering & Research</span><br />
              The drive to learn new things and how things work made me to choose engineering as my career. I have been passionate about aerospace and mechanical engineering since childhood, and I am currently pursuing a degree in Mechanical Engineering at Pandit Deendayal Energy University (PDEU). In my high school, I started searching about model rockets and really wanted to make one. On my very first day of college, I started finding help to get resources, which led me to start my very first research journey. A professor at PDEU made me a part of his research project on developing a real-time monitoring system and process maps for laser powder bed fusion (LPBF) additive manufacturing of biocompatible bioresorbable ZK60 magnesium alloy implants. Yes, it was not at all linked with rockets, but he saw the spark in me and gave the opportunity to work with seniors on this project. I worked on that project for almost 2 years then. Also, joining the international symposium on battery technology as the lead coordinator and presenting a review article there taught me even more about research. The more I got into research, the more I enjoyed it. While thinking of making a model rocketry club at PDEU, I found that it was already there, and the next moment I knew I cracked the 40-minute long interview and I was in. Since then, I have been a core member of Apogee3, the aerospace society of PDEU, participated in national model rocketry competitions, and acted as founder and advisor of Zenith, the rocketry student-team of PDEU. While being a technical person, I handled and learnt rocket design, analysis, propulsion, electronics, and overall systems engineering. Along with it, I also handled event management and treasurer duties which taught me soft skills like leadership, team management, and finance. To broaden my knowledge of aerospace engineering, I also attended ISRO courses and aerospace courses from IITs. I have closely followed the progress of the aerospace industry in India then, meeting ISRO chairman Dr. S. Somanath, the founder of Skyroot Aerospace, and learning from scientists from ISRO.<br />
              Later, in my 2nd year, I joined research projects on additive manufacturing while enhanced my skills in CFD (by Dr. Anirudh Kulkarni), water treatment and management (by Prof. Anurag Mudgal), CNC (by Dr. Pavan Gurrala and Dr. Krunal Mehta), etc. during all the summer and winter breaks by participated in different skill development programs. Taking the advice of my chemistry professor, Dr. Kalisadhan Mukherjee, to heart, I dedicated that year to sharpening my technical toolkit. The three pillars of mechanical engineering—<b>Design, Manufacturing, and Thermal</b>—all pulled at my curiosity equally, making it impossible to pick just one favorite. Diving deeper into the world of research under Prof. Vishvesh Badheka, I authored a review on hot cracking in LPBF, which was proudly published as a conference paper at the prestigious IMECE-INDIA 2025 in Hyderabad. As I transitioned into my junior year, another milestone arrived when my paper on developing an ANN model for Multi-Effect Desalination systems was accepted for publication. My journey then took me to IIT Gandhinagar for a summer internship under Prof. Manish Kumar, where I used CFD to model snow as a granular material, aiming to design structures that mitigate avalanche impacts. Winning the first prize and the Bhalodia-Khetan Summer Research Excellence Award there was a turning point that completely transformed my perspective and fueled my hunger for discovery. That momentum has kept me going, and I am still actively working on that project at IIT Gandhinagar today. Simultaneously, I am collaborating with Prof. Pavan Gurrala to develop novel TPMS structures designed to reduce pressure drop in compact heat exchangers. We are also venturing into biomechanical engineering together, creating advanced prosthetics and implants with new surgical methods to tangibly improve patients&apos; quality of life. These projects are driven by a cause to make a real difference in the world, and that purpose is the true engine behind my research. I strongly believe that research is about solving real problems to impact society; it is not merely about publishing papers, but about creating solutions that actually work in the real world.
            </p>
            <p>
              <span className={styles.pTitle}>Programming</span><br />
              I started programming in my 7th grade at Royal Technodoft Pvt. Ltd. where I learned basics of programming and software development. I have been programming since then, and it has become a crucial skill that anchors my academic and professional journey. I have used this digital language for a multitude of purposes, ranging from complex data analysis and simulations to building software. I have experience with languages like Python, C++, MATLAB, and Java, which I have wielded as tools for different projects and research work. Programming has allowed me to automate tasks, analyze data efficiently, and craft software solutions for complex problems. It has also been a valuable tool for my research in CFD simulations, AI-driven optimization, and other engineering applications. The ability to code has not only enhanced my <span className={styles.highlight}>technical</span> skills but has also opened up new opportunities for innovation and problem-solving in my field. Programming has changed the way I approach engineering challenges, allowing me to leverage computational tools and techniques to create impactful solutions in aerospace, energy, and sustainability.<br />
              At the time I started programming, I was really interested in web development, and I created various websites as projects and challenges, back when AI was not a boom. I actually started programming by writing in notebooks at the time because the computer used to crash all the time and I sometimes didn't have the time to save the code. That really proved to me that at times my <span className={styles.highlight}>hardworking</span> skills can be really helpful, and now supplemented by AI, it makes a great team. I have also developed various software applications and tools, including flight computer software for model rockets and a real-time monitoring system for additive manufacturing. During my 11th grade, I was addicted to programming and I used to code for 12-14 hours a day, which was really crazy. I also interned at Royal Technosoft, where I got to work on and teach programming, game development, robotics, and software engineering. Eventually, I had to overcome my addiction towards programming and to focus on studies, after which it has been a valuable skill in my quiver.
            </p>
            <p>
              <span className={styles.pTitle}>ART</span><br />
              When I was young (3 years old), I was put into art classes and that was when I started &quot;art&quot;, as it may be said. Really, it was just colorful scribbling, like a toddler would do. It is said, what you do at the age of 3, is how your brain develops, and thats what happened to me. In the beginning, I used to draw sun in the ocean water when drawing night scenes thinking it sets inside. I slowly started drawing, art and crafts, this actually developed <span className={styles.highlight}>creativity, imagination and visualization</span> skills in me. As I grew up, I took up professional courses for various art forms, in the prestigeous Kanoria Center for Arts, and later cleared the elementary and intermediate exams with A grade. I have even painted canvases as my high school project and just for enjoying. Today, as a mechanical engineering student and aerospace enthusiast, I find that these skills are crucial in my field. Whether it is designing a new component, visualizing complex systems, or thinking outside the box to solve engineering challenges, the creativity and imagination nurtured through art have been invaluable assets in my academic and professional journey. Art has not only been a form of self-expression but also a powerful tool that has shaped my approach to engineering and problem-solving, allowing me to bring innovative ideas to life in the world of aerospace and mechanical engineering. The way I see the world is completely different because of the creativity I developed at that time.
            </p>
            <p>
              <span className={styles.pTitle}>SPORTS</span><br />
              As a 4-year told, doctors found my lungs weak and I had Asthma in 2009. Luckily, all pharmacy shops were closed due to a strike and I had a flight to my hometown next day. In Ahmedabad, my parents took a second opinion with our family doctor and he suggested to start sports and not take any Asthma pump. With my dad, I went to join Karate classes but got afraid the minute I saw the black belts fighting. I joined the nearby skating classes instead. For the next 1.5 years I continued skating, reaching the in-line level, until I was injured and my relatives got scared and I had to quit. After that, my parents put me in lawn tennis classes, where I got scared of the huge court. I still started. In the beginning, I used to think we have to hit in the net, deliberately. Yes, I used to be dumb. Slowly, it became my sport, I started playing competitively, and I have been playing for the last 15 years. I have won many tournaments at the inter-club level, and have played the state-ranking tournaments. Tennis has taught me <span className={styles.highlight}>discipline, perseverance</span>, and the importance of <span className={styles.highlight}>mental toughness</span>. It has also given me an agrgresion towards completing tasks with perfection, which has been my game and a healthy outlet for stress and a way to stay physically active. The skills and values I have gained from tennis have not only enriched my personal life but have also positively influenced my academic and professional pursuits, helping me to approach challenges with <span className={styles.highlight}>resilience</span> and a <span className={styles.highlight}>competitive spirit</span>. I didn't leave Karate though after I was afraid of it first. I pushed through that initial fear and eventually competed at the state level, where I earned a bronze medal. Continuing Karate built up my <span className={styles.highlight}>confidence</span> and proved to me that I am truly <span className={styles.highlight}>tenacious</span>. For fun, I have played mostly all other sports like cricket, badminton, football, basketball, and many more. Now I am the lawn tennis secretary of my university, and I am trying to promote the sport in my university and make it more popular among the students. After starting my college, I&apos;m playing it just for recreational and fun purpose in my club and participate in the yearly friendly tournaments and our inter-university &quot;Energy cup&quot;, and I am loving it.
            </p>
            <p>
              <span className={styles.pTitle}>Adventure and Travel</span><br />
              I love to be outdoors and explore new places. I have been to many places in India, and I have had some amazing experiences. I have been to the Himalayas, where I have trekked to some of the most beautiful places in the world. My university time, I have travelled a lot majorly to participate in various competitions and conferences, which has given me the opportunity to explore new cities and meet new people. After a lot of work, being outdoors and taking a break to just enjoy life is what I love the most. I have started trekking as a sport now. Recently, I did bungee jumping for the first time, and it was an amazing experience. I am always looking for new adventures and experiences, and I am excited to see where my love for travel and adventure takes me in the future. The adventure and travel have not only enriched my life with unforgettable experiences but have also broadened my perspective, allowing me to appreciate the beauty and diversity of the world we live in. Whether it is exploring the serene landscapes of the Himalayas or immersing myself in the vibrant culture of new cities, I am always eager to embrace new adventures and create lasting memories through travel.<br />
            </p>
            <p>
              Like I focus on enjoying and nature at the moment, pursuing science with passion shows how happy science makes me. The eureka moments, the joy of learning something new, the excitement of discovery, and the satisfaction of solving complex problems are what drive me in my scientific pursuits. I am passionate about pushing the boundaries of knowledge and making a positive impact through my work in science and engineering. The thrill of exploration and the desire to contribute to the advancement of technology and understanding fuel my dedication to my academic and professional journey in the field of science.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
