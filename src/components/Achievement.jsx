import React, { useState } from 'react';
import './Achievement.css';

const Achievement = () => {
  const [filter, setFilter] = useState('*');

  const handleFilter = (category) => {
    setFilter(category);
  };

  const portfolioItems = [
    {
      category: 'filter-app',
      img: 'assets/img/certificates/Cisco Cert.png',
      title: 'Ethical Hacker',
      description: 'Cisco',
      detailsLink: 'https://www.credly.com/badges/ea128641-fa6a-4c47-8bfd-5ee4958d1516/public_url',
    },
    {
      category: 'filter-web',
      img: 'assets/img/portfolio/web1.jpeg',
      title: 'Web 3',
      description: 'Web',
      detailsLink: 'portfolio-details.html',
    },
    {
      category: 'filter-app',
      img: 'assets/img/certificates/C sharp.png',
      title: 'C Sharp',
      description: '.NET',
      detailsLink: 'https://www.freecodecamp.org/certification/fcc6af568b2-b8f5-41a7-8ed1-969f34621562/foundational-c-sharp-with-microsoft',
    },
    {
      category: 'filter-card',
      img: 'assets/img/portfolio/img2.jpeg',
      title: 'Card 2',
      description: 'Card',
      detailsLink: 'portfolio-details.html',
    },
    {
      category: 'filter-web',
      img: 'assets/img/portfolio/web2.jpeg',
      title: 'Web 2',
      description: 'Web',
      detailsLink: 'portfolio-details.html',
    },
    {
      category: 'filter-app',
      img: 'assets/img/certificates/Simply Learn.png',
      title: 'Cyber Security 101',
      description: 'Simply Learn',
      detailsLink: 'https://simpli-web.app.link/e/72XPIc3OvJb',
    },
    {
      category: 'filter-card',
      img: 'assets/img/portfolio/img1.jpeg',
      title: 'Card 1',
      description: 'Card',
      detailsLink: 'https://www.pinterest.com/pin/876724252436362699/',
    },
    {
      category: 'filter-card',
      img: 'assets/img/portfolio/img3.jpeg',
      title: 'Card 3',
      description: 'Card',
      detailsLink: 'portfolio-details.html',
    },
    {
      category: 'filter-web',
      img: 'assets/img/portfolio/web3.jpeg',
      title: 'Web 3',
      description: 'Web',
      detailsLink: 'portfolio-details.html',
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <span>My Portfolio</span>
          <h2>My Portfolio</h2>
          <p>Protecting and Developing high Quality Websites and Apps.</p>
        </div>
        <ul id="portfolio-filters" className="d-flex justify-content-center">
          <li onClick={() => handleFilter('*')} className={filter === '*' ? 'filter-active' : ''}>All</li>
          <li onClick={() => handleFilter('filter-app')} className={filter === 'filter-app' ? 'filter-active' : ''}>Certificates</li>
          <li onClick={() => handleFilter('filter-card')} className={filter === 'filter-card' ? 'filter-active' : ''}>Projects</li>
          <li onClick={() => handleFilter('filter-web')} className={filter === 'filter-web' ? 'filter-active' : ''}>Tools</li>
        </ul>
        <div className="row portfolio-container">
          {portfolioItems.filter(item => filter === '*' || item.category === filter).map((item, index) => (
            <div key={index} className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}>
              <div className="portfolio-img">
                <img src={item.img} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a href={item.img} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title={item.title}><i className="bx bx-plus"></i></a>
                <a href={item.detailsLink} className="details-link" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
