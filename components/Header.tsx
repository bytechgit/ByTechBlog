import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import Head from 'next/head';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/dd4ecbb228.js" crossOrigin="anonymous"></script>
      </Head>
      <div className='landing-blog-header-wrapper'>
        <div className="landing-blog-header">
          <div>
            <span>byTech Blog</span>

          </div>

          <div className='share-links'>
            <h3>Podeli</h3>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>

        </div>
      </div>

      {/* <div className='landing-blog-desc'>
        <h2>Postani deo naše zajednice!
          <i className="fa-solid fa-people-group"> </i>
          <br></br> Budi u toku sa najnovijim postovima, ostavi svoj komentar i podeli na društvenim mrežama!</h2>
      </div> */}

      {/* <div className='blog-posts-carousel'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src=""
              className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{post.title}</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}

      <div className="categories">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}><button className="btn btn-secondary">{category.name}</button></Link>
        ))}

      </div>
    </>
  );
};

export default Header;