import styles from './Nav.module.scss';
import React, { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolling, setScrolling] = useState(false);
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
          <div className={styles.item}> Projects</div>
          <div className={styles.item}> Resume</div>
          <div className={styles.item}> Contact</div>
        </div>
      </div>
      {/* <header className='App-header'></header> */}
    </div>
  );
}
