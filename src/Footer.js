import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer id="contact" className={styles.container} aria-labelledby="contact-heading">
      <div className={styles.content}>
        <div className={styles.contact}>
          <p className={styles.eyebrow}>Contact</p>
          <h2 id="contact-heading">Let's connect.</h2>
          <p className={styles.description}>Have a question or want to connect? Send me an email.</p>
          <a className={styles.email} href="mailto:jjjw1010@gmail.com">
            <FiMail aria-hidden="true" />
            <span>jjjw1010@gmail.com</span>
          </a>
        </div>
        <nav className={styles.socialLinks} aria-label="Social profiles">
          <a href="https://github.com/jjjw1010" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
            <FiGithub aria-hidden="true" />
            <span>GitHub</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/junwoojung/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
            <FiLinkedin aria-hidden="true" />
            <span>LinkedIn</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
