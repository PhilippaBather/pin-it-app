import { useTaskContext } from "../../store/context-api/task-context.js";
import TaskButton from "../../components/ui/Buttons/TaskButton";
import AddTaskModal from "../../components/ui/Modals/ModalOverlay";
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
