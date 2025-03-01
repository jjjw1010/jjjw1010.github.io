import styles from './Projects.module.scss';

export default function Projects() {
    return (
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Simple RISC-V Multi-Core System</h3>
            <p className={styles.cardDescription}>
                TBD
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FPGA-Based Heart Rate Monitor</h3>
            <p className={styles.cardDescription}>
                TBD
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Interactive Website</h3>
            <p className={styles.cardDescription}>
                TBD
            </p>
          </div>
        </div>
      </div>
    );
  }
