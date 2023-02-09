import { useTaskContext } from "../../store/task-context.js";
import TaskButton from "../../components/UI/Buttons/TaskButton";
import styles from "./styles.module.scss";

const AddTask = () => {
  const { openTaskCreator } = useTaskContext();

  const onClickHandler = () => {
    openTaskCreator();
  };

  return (
    <div className={styles.addTask}>
      <TaskButton onClick={onClickHandler} />
    </div>
  );
};

export default AddTask;
