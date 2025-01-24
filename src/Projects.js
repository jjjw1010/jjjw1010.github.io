import styles from './Projects.module.scss';

export default function Projects() {
    return (
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Project 1</h3>
            <p className={styles.cardDescription}>
                TBD
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Project 2</h3>
            <p className={styles.cardDescription}>
                TBD
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Project 3</h3>
            <p className={styles.cardDescription}>
                TBD
            </p>
          </div>
        </div>
      </div>
    );
  }
