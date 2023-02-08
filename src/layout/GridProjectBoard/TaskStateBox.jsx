import styles from "./styles.module.scss";

const TaskStateBox = (props) => {
  const { title } = props;

  return (
    <div className={styles.taskStateBox}>
      <h1 className={styles.taskStateTitle}>{title}</h1>
    </div>
  );
};

export default TaskStateBox;
