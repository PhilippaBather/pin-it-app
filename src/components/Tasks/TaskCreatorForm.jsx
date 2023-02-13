import CancelButton from "../UI/Buttons/CancelButton";
import SubmitButton from "../UI/Buttons/SubmitButton";
import { useTaskContext } from "../../store/context-api/task-context";
import styles from "./styles.module.scss";

const date = new Date();
const localeDate = date.toLocaleDateString();

const TaskCreatorForm = () => {
  const { closeTaskCreator } = useTaskContext();

  const submitHandler = (e) => {
    e.preventDefault();
    closeTaskCreator();
    // priority value will need changing to a Number
  };

  const cancelHandler = () => {
    console.log("cancel handler");
    closeTaskCreator();
  };

  return (
    <>
      <form onSubmit={submitHandler} className={styles.form}>
        <h1 className={styles.formTitle}>Create Task</h1>
        <div className={styles.formInputsContainer}>
          <label className={styles.formLabel} htmlFor="task-title">
            Title
          </label>
          <input
            className={styles.formInputs}
            type="text"
            id="taskTitle"
            name="title"
            maxLength={50}
          />
          <label className={styles.formLabel} htmlFor="task-priority">
            Priority
          </label>
          <select
            className={styles.formInputs}
            type="text"
            i="task-priority"
            name="task-priority"
            defaultValue="low"
          >
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
            <option value="3">Urgent</option>
          </select>
          <label className={styles.formLabel} htmlFor="task-deadline">
            Deadline
          </label>
          <input
            className={styles.formInputs}
            type="date"
            id="task-deadline"
            min={localeDate}
            name="deadline"
            defaultValue={localeDate}
          />
          <label className={styles.formLabel} htmlFor="task-description">
            Description
          </label>
          <textarea
            className={styles.formTextArea}
            type="text"
            id="task-description"
            placeholder="Add optional description..."
            maxLength={200}
          />
        </div>
        <div className={styles.formButtonContainer}>
          <CancelButton btnStyles={styles.formButton} onClick={cancelHandler} />
          <SubmitButton btnStyles={styles.formButton} text="Create Task" />
        </div>
      </form>
    </>
  );
};

export default TaskCreatorForm;
