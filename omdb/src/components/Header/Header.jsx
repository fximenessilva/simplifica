/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={scrollPosition === 0 ? 'header-wrapper header-top' : 'header-wrapper header-scrolled'}>
      <header>
        <Link to="/">
          <img className="header-logo" src="https://fontmeme.com/permalink/210304/e949283e3c4f31f05b1d2622a0c9a082.png" alt="netflix-font" border="0" />
        </Link>
      </header>

    </div>
  );
}
