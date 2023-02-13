import { useState } from "react";
import CancelButton from "../UI/Buttons/CancelButton";
import SubmitButton from "../UI/Buttons/SubmitButton";
import { useTaskContext } from "../../store/context-api/task-context";
import { isNotEmpty, validateDate } from "../../utils/validation";
import styles from "./styles.module.scss";

const TaskCreatorForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(false);
  const [isValidDeadline, setIsValidDeadline] = useState(false);
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [isDeadlineTouched, setIsDeadlineTouched] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { closeTaskCreator } = useTaskContext();

  const titleChangeHandler = (e) => {
    const title = e.target.value;
    setTitle(title);
    setIsValidTitle(isNotEmpty(title));
    setIsTitleTouched(true);
  };

  // not required; defaults to 0 (low) if no change
  const priorityChangeHandler = (e) => {
    setPriority(parseInt(e.target.value)); // convert to num
  };

  const deadlineChangeHandler = (e) => {
    const deadline = e.target.value;
    setDeadline(deadline);
    setIsDeadlineTouched(true);
    if (validateDate(new Date(deadline))) setIsValidDeadline(true);
  };

  // not required; no validation
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value.trim());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // validate
    if (!isValidTitle || !isValidDeadline || title === "") return;

    // TODO: update redux

    closeTaskCreator();
  };

  const cancelHandler = () => {
    closeTaskCreator();
  };

  const isSubmitClicked = () => {
    setIsSubmitted(true);
  };

  const errMsgTitle = <p className={styles.errMsg}>Task must have a title.</p>;

  const errMsgDeadline = (
    <p className={styles.inputNotification}>Please select a future date.</p>
  );

  const titleInputPrompt = (
    <p className={styles.inputNotification}>Please enter a title.</p>
  );

  const deadlineInputPrompt = (
    <p className={styles.inputNotification}>Please select a date.</p>
  );

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
            id="task-title"
            name="title"
            maxLength={50}
            value={title}
            onChange={titleChangeHandler}
          />
          {isTitleTouched && !isValidTitle && errMsgTitle}
          {isSubmitted && !isValidTitle && titleInputPrompt}

          <label className={styles.formLabel} htmlFor="task-priority">
            Priority
          </label>
          <select
            className={styles.formInputs}
            type="text"
            id="task-priority"
            name="task-priority"
            value={priority}
            onChange={priorityChangeHandler}
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
            name="deadline"
            value={deadline}
            onChange={deadlineChangeHandler}
          />
          {isDeadlineTouched && !isValidDeadline && errMsgDeadline}
          {isSubmitted && deadline === "" && deadlineInputPrompt}
          <label className={styles.formLabel} htmlFor="task-description">
            Description
          </label>
          <textarea
            className={styles.formTextArea}
            type="text"
            id="task-description"
            placeholder="Add optional description..."
            maxLength={200}
            value={description}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className={styles.formButtonContainer}>
          <CancelButton btnStyles={styles.formButton} onClick={cancelHandler} />
          <SubmitButton
            btnStyles={styles.formButton}
            text="Create Task"
            onClick={isSubmitClicked}
          />
        </div>
      </form>
    </>
  );
};

export default TaskCreatorForm;
