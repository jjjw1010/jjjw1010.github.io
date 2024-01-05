import styles from './Footer.module.scss';
import React from 'react';

import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        {/* <div className={styles.item}></div> */}
        <SocialIcon
          network='github'
          bgColor='transparent'
          url='https://github.com/jjjw1010'
        />
        <SocialIcon
          network='email'
          bgColor='transparent'
          url='mailto:jjjw1010@gmail.com'
        />
        <SocialIcon
          network='linkedin'
          bgColor='transparent'
          url='https://www.linkedin.com/in/junwoojung/'
        />
      </div>
    </div>
  );
}
