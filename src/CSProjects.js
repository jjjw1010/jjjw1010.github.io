import styles from './CSProjects.module.scss';
import { useState } from 'react';
function TicTacToe() {
  return <div>1</div>;
}
//Implement caoursel?
export default function CSProject() {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.projectContainer}>
        <div className={styles.visualContainer}>
          {currentSlide === 1 ? <TicTacToe /> : <></>}
        </div>
        <div className={styles.listContainer}>
          <div className={styles.header}>Projects</div>
          <div className={styles.item} onClick={() => setCurrentSlide(1)}>
            TicTacToe1
          </div>
          <div className={styles.item} onClick={() => setCurrentSlide(2)}>
            TicTacToe2
          </div>

          <div className={styles.item} onClick={() => setCurrentSlide(3)}>
            TicTacToe3
          </div>

          <div className={styles.item} onClick={() => setCurrentSlide(4)}>
            TicTacToe4
          </div>
        </div>
      </div>
    </div>
  );
}
