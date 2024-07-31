import React, { useState, useEffect } from 'react';
import './Achievement.css';
import { portolioProjects } from '../utils/data.js';

const Achievement = () => {
  const [filter, setFilter] = useState('*');

  const handleFilter = (category) => {
    setFilter(category);
  };

  // Function to add animation effect
  useEffect(() => {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach((item) => {
      item.classList.add('animate__animated', 'animate__fadeIn');
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          {/* <span>My Portfolio</span> */}
          <h2>My <span>Portfolio</span></h2>
          <p>Protecting and Developing high Quality Websites and Apps.</p>
        </div>
        <ul id="portfolio-filters" className="d-flex justify-content-center">
          <li onClick={() => handleFilter('*')} className={filter === '*' ? 'filter-active' : ''}>All</li>
          <li onClick={() => handleFilter('filter-app')} className={filter === 'filter-app' ? 'filter-active' : ''}>Certificates</li>
          <li onClick={() => handleFilter('filter-card')} className={filter === 'filter-card' ? 'filter-active' : ''}>Projects</li>
          <li onClick={() => handleFilter('filter-web')} className={filter === 'filter-web' ? 'filter-active' : ''}>Tools</li>
        </ul>
        <div className="row portfolio-container">
          {portolioProjects.filter(item => filter === '*' || item.category === filter).map((item, index) => (
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
