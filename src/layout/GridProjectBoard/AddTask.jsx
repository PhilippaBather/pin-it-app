import TaskButton from "../../components/ui/buttons/TaskButton";
import styles from "./styles.module.scss";

const AddTask = () => {
  return (
    <div className={styles.addTask}>
      <TaskButton />
    </div>
  );
};

export default AddTask;
