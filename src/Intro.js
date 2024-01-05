import styles from './Intro.module.scss';
export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Hello World!</div>
      <div>I'm Junwoo Jung.</div>
      <div>I am a software engineer from Mars, PA.</div>
      <div>I am proficient in Python, JavaScript, and TypeScript.</div>
      <div>
        I am passionate about using new technologies and working on full stack
        projects.
      </div>
    </div>
  );
}
