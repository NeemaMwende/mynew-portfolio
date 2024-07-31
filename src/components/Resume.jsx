import React, { useState } from 'react';
import './Resume.css'; // Import the CSS file for styling

const Resume = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf';
    link.download = 'Neema_Mwende_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <header className="header">
        <h1>My <span>Resume</span></h1>
      </header>
      <main className="main">
        <div className='mydisplay'>
          <div className='leftalign'>
            <section className="summary">
              <h2>Summary</h2>
              <p>NEEMA MWENDE</p>
              <p>Proficient in the MERN Stack Technologies | Full Stack Developer</p>
              <p>Kenya, Nairobi County</p>
              <p>+2547 92 366 778</p>
              <p>neemamwende009@gmail.com</p>
            </section>
            <section className="education">
              <h2>Education</h2>
              <div className="education-item">
                <h3>BOOTSTRAP | WORDPRESS | GRAPHIC DESIGN</h3>
                <p>2024 - Present</p>
                <p>Power Learn Project PLP</p>
                <p>Software Engineering</p>
                <p>Expertise in backend technologies including Node, Python</p>
                {/* <p>Expertise in front-end technologies including HTML5, CSS3, JavaScript, and frameworks like React.js. Ability to develop responsive and user-friendly web applications with a focus on performance and scalability.</p> */}
              </div>
              <div className="education-item">
                <h3>BOOTSTRAP | WORDPRESS | GRAPHIC DESIGN</h3>
                <p>2013 - 2019</p>
                <p>Chuka University</p>
                <p>Bachelor of Science in Computer Science</p>
                {/* <p>Expertise in front-end technologies including HTML5, CSS3, JavaScript, and frameworks like React.js. Ability to develop responsive and user-friendly web applications with a focus on performance and scalability.</p> */}
              </div>
              <div className="education-item">
                <h3>BLACK | GRAY BOX TESTING | WHITE BOX TESTING</h3>
                <p>2018 - 2014</p>
                <p>St. Anne's Girls HighSchool</p>
                <p>Kenya Certificate of Secondary Level</p>
                {/* <p>Proficient in various penetration testing methodologies such as black box testing, white box testing, and grey box testing. Skilled in conducting vulnerability assessments and penetration tests using tools such as Metasploit, Nmap, Burp Suite, Wireshark, and Nessus.</p> */}
              </div>
            </section>
          </div>
          <div className='rightalign'>
            <section className="experience">
              <h2>Professional Experience</h2>
              <div className="experience-item">
                <h3>Freelance Developer</h3>
                <p>2022 - Present</p>
                <p>Kenya, Nairobi County</p>
                <ul>
                  <li>Lead in the design, development, and implementation of grahics</li>
                  <li>Delegate tasks to the 7 members of the design team and provide.</li>
                  <li>Supervise the assessment of all graphic materials in order to .</li>
                  <li>Oversee the efficient use of production project budgets </li>
                </ul>
              </div>
              <div className="experience-item">
                <h3>Glitex Solutions Company</h3>
                <p>2022 - 2022</p>
                <p>Kenya, Nairobi County</p>
                <ul>
                <li>Develop and maintain user interfaces using React.</li>
                  <li>Create reusable components and libraries for future use.</li>
                  {/* <li>Optimize components for maximum performance across web and mobile browsers.</li>
                  <li>Collaborate with backend developers to integrate APIs and services.</li> */}
                  <li>Ensure responsive design and cross-browser compatibility.</li>
                  <li>Debug and troubleshoot issues in the application.</li>
                  <li>Write clean, maintainable code following industry best practices.</li>
                </ul>
              </div>
              {showMore && (
                <div className="experience-item">
                  <h3>ADDITIONAL EXPERIENCE</h3>
                  <p>...</p>
                </div>
              )}
            </section>
            <div className="buttons">
              <button onClick={handleReadMore}>{showMore ? 'Show Less' : 'Read More'}</button>
              <button onClick={handleDownloadCV}>Download CV</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
