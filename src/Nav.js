import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Nav.module.scss';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div
      className={`${styles.container} ${isScrolled ? styles.isScrolled : ''}`}
    >
      <div className={styles.navBar}>
        <div className={styles.logoContainer} onClick={goToHome}>
          <div className={styles.logo}>JJ</div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.item} onClick={openResume}>Resume</div>
        </div>
      </div>
    </div>
  );
}
