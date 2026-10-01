import { FiArrowUpRight } from 'react-icons/fi';
import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <header className={styles.container}>
      <nav className={styles.navBar} aria-label="Main navigation">
        <a className={styles.logo} href="#home" aria-label="Junwoo Jung, home">
          JJ<span>.</span>
        </a>
        <div className={styles.itemContainer}>
          <a className={styles.item} href="#projects">Projects</a>
          <a className={styles.item} href="#contact">Contact</a>
          <a
            className={styles.github}
            href="https://github.com/jjjw1010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            GitHub <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
