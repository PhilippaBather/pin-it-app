import styles from "./styles.module.scss";

const TaskButton = (props) => {
  return (
    <button className={styles.addTaskButton} onClick={props.onClick}>
      Add Task
    </button>
  );
};

export default TaskButton;
