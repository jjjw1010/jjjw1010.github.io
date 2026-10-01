import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import styles from './Content.module.scss';
import JImage from './Images/J.png';

export default function Content() {
  return (
    <section id="home" className={styles.container} aria-labelledby="intro-title">
      <div className={styles.contentBox}>
        <div className={styles.leftContent}>
          <p className={styles.eyebrow}>Software Engineer</p>
          <h1 id="intro-title" className={styles.header}>Junwoo Jung<span>.</span></h1>
          <p className={styles.description}>
            Projects in software, computer architecture, and embedded systems.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryLink} href="#projects">
              View projects <FiArrowDown aria-hidden="true" />
            </a>
            <a className={styles.secondaryLink} href="#contact">
              Get in touch <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.profileCard}>
            <img src={JImage} alt="" width="512" height="512" className={styles.image} />
            <div className={styles.profileDetails}>
              <p className={styles.profileName}>Junwoo Jung</p>
              <a
                className={styles.profileLink}
                href="https://github.com/jjjw1010"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="jjjw1010 on GitHub (opens in a new tab)"
              >
                @jjjw1010 <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
