import ProjectHeader from "./ProjectHeader";
import TaskStateBox from "../../components/Tasks/TaskStateBox";

import styles from "./styles.module.scss";
import AddTask from "../../components/Tasks/AddTask";

const GridProjectBoard = (props) => {
  return (
    <div className={styles.gridWrapper}>
      <ProjectHeader />
      <AddTask />
      <TaskStateBox />
      <TaskStateBox />
      <TaskStateBox />
    </div>
  );
};

export default GridProjectBoard;
