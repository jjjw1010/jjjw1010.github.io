import { FiActivity, FiCpu, FiGlobe } from 'react-icons/fi';
import styles from './Projects.module.scss';

const projects = [
  {
    title: 'Simple RISC-V Multi-Core System',
    category: 'Computer architecture',
    Icon: FiCpu,
  },
  {
    title: 'FPGA-Based Heart Rate Monitor',
    category: 'FPGA',
    Icon: FiActivity,
  },
  {
    title: 'Interactive Website',
    category: 'Web development',
    Icon: FiGlobe,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.container} aria-labelledby="projects-heading">
      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Hardware &amp; web</p>
          <h2 id="projects-heading">Projects</h2>
        </div>
        <div className={styles.grid}>
          {projects.map(({ title, category, Icon }) => (
            <article className={styles.card} key={title}>
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <p className={styles.category}>{category}</p>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDescription}>Project details coming soon.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
