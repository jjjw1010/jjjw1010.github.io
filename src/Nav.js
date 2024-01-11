import styles from './Nav.module.scss';
import React, { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolling, setScrolling] = useState(false);
  const handleScrollButtonClick = (scrollvalue) => {
    if (scrollvalue !== undefined) {
      window.scrollTo({
        top: scrollvalue,
        behavior: 'smooth', // Use smooth scrolling
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`${styles.container} ${scrolling ? styles.isScrolled : ''}`}
    >
      <div className={styles.navBar}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>JJ</div>
        </div>
        <div className={styles.itemContainer}>
          <div
            className={styles.item}
            onClick={() => handleScrollButtonClick(720)}
          >
            CS Projects
          </div>
          <div
            className={styles.item}
            onClick={() => handleScrollButtonClick(1520)}
          >
            ECE Projects
          </div>
          <div
            className={styles.item}
            onClick={() => handleScrollButtonClick(2320)}
          >
            Resume
          </div>
          <div
            className={styles.item}
            onClick={() => handleScrollButtonClick(3000)}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}
