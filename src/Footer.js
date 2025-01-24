import styles from './Footer.module.scss';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footerBar}>
        <div className={styles.itemContainer}>
          <SocialIcon
            network='github'
            bgColor='transparent'
            fgColor='white'
            url='https://github.com/jjjw1010'
          />
          <SocialIcon
            network='email'
            bgColor='transparent'
            fgColor='white'
            url='mailto:jjjw1010@gmail.com'
          />
          <SocialIcon
            network='linkedin'
            bgColor='transparent'
            fgColor='white'
            url='https://www.linkedin.com/in/junwoojung/'
          />
        </div>
      </div>
    </footer>
  );
}