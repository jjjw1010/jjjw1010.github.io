import styles from './Content.module.scss';
import JImage from './Images/J.png';

export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <div className={styles.leftContent}>
          <div className={styles.header}>Junwoo Jung</div>
          <div className={styles.description}>Software Engineer</div>
        </div>
        <div className={styles.rightContent}>
          <img src={JImage} alt="J" className={styles.image} />
        </div>
      </div>
    </div>
  );
}