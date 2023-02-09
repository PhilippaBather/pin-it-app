import ReactDOM from "react";
import Card from "../Card";
import TaskCreatorForm from "../../Tasks/TaskCreatorForm";
import styles from "./styles.module.scss";

const Backdrop = (props) => {
  return <div />;
};

const TaskFormModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <TaskCreatorForm />
    </Card>
  );
};

const AddTaskModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <TaskFormModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddTaskModal;
