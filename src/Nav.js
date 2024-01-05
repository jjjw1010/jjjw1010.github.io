import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>JJ</div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.item}> Projects</div>
        <div className={styles.item}> Resume</div>
        <div className={styles.item}> Contact</div>
      </div>
      {/* <header className='App-header'></header> */}
    </div>
  );
}
