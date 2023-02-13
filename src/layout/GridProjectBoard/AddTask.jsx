import { useTaskContext } from "../../store/task-context.js";
import TaskButton from "../../components/UI/Buttons/TaskButton";
import AddTaskModal from "../../components/UI/Modals/ModalOverlay";
import styles from "./styles.module.scss";

const AddTask = () => {
  const { isCreateTaskOpen, openTaskCreator } = useTaskContext();

  const onClickHandler = () => {
    openTaskCreator();
  };

  return (
    <>
      {isCreateTaskOpen && <AddTaskModal />}
      <div className={styles.addTask}>
        <TaskButton onClick={onClickHandler} />
      </div>
    </>
  );
};

export default AddTask;
