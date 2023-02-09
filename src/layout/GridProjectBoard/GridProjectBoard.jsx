import ProjectHeader from "./ProjectHeader";
import AddTask from "./AddTask";
import TaskStates from "./TaskStates";
import DropZoneContainer from "./DropZoneContainer";
import styles from "./styles.module.scss";

const GridProjectBoard = () => {
  return (
    <div className={styles.gridWrapper}>
      <ProjectHeader />
      <AddTask />
      <TaskStates />
      <DropZoneContainer />
    </div>
  );
};

export default GridProjectBoard;
