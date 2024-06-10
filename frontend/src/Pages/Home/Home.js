import React from 'react';
import './Home.css';
import HomePhoto from '../assets/LPagePhoto.png';

const Home = () => {
  return (
    <div
      className="HomePagePic"
      style={{
        backgroundImage: `url(${HomePhoto})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <div>
        <h1 className="food-h1">BEST FOOD FOR</h1>
        <h1 className="food-h1">YOUR TASTE</h1>
        <p className="food-p">
          Discover delectable cuisine and unforgettable moments
        </p>
        <p className="food-p">in our welcoming, culinary haven.</p>
      </div>
    </div>
  );
};

export default Home;
