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
        <h1>Neema Mwende</h1>
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
                <p>2019 - 2020</p>
                <p>Kibabii University Main Campus</p>
                <p>Expertise in front-end technologies including HTML5, CSS3, JavaScript, and frameworks like React.js. Ability to develop responsive and user-friendly web applications with a focus on performance and scalability.</p>
              </div>
              <div className="education-item">
                <h3>BLACK | GRAY BOX TESTING | WHITE BOX TESTING</h3>
                <p>2020 - 2023</p>
                <p>Kibabii University Main Campus</p>
                <p>Proficient in various penetration testing methodologies such as black box testing, white box testing, and grey box testing. Skilled in conducting vulnerability assessments and penetration tests using tools such as Metasploit, Nmap, Burp Suite, Wireshark, and Nessus.</p>
              </div>
            </section>
          </div>
          <div className='rightalign'>
            <section className="experience">
              <h2>Professional Experience</h2>
              <div className="experience-item">
                <h3>SENIOR GRAPHIC DESIGN SPECIALIST</h3>
                <p>2019 - Present</p>
                <p>Kenya, Nakuru County</p>
                <ul>
                  <li>Lead in the design, development, and implementation of graphic, layout, and production communication materials.</li>
                  <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                  <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design.</li>
                  <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000.</li>
                </ul>
              </div>
              <div className="experience-item">
                <h3>GRAPHIC DESIGN SPECIALIST</h3>
                <p>2017 - 2018</p>
                <p>Stepping Stone Advertising, Kenya, Nakuru</p>
                <ul>
                  <li>Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).</li>
                  <li>Managed up to 5 projects or tasks at a given time while under pressure.</li>
                  <li>Recommended and consulted with clients on the most appropriate graphic design options based on their overall marketing goals.</li>
                  <li>Created 4+ design presentations and proposals a month for clients and account managers.</li>
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
