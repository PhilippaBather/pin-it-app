import styles from "./styles.module.scss";

const ProjectHeader = () => {
  return (
    <div className={styles.projectHeader}>
      <input
        className={styles.projectTitleInput}
        type="text"
        placeholder="Project title..."
      />
    </div>
  );
};

export default ProjectHeader;
