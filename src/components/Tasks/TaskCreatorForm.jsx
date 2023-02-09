import CancelButton from "../UI/Buttons/CancelButton";
import SubmitButton from "../UI/Buttons/SubmitButton";
import styles from "styles.module.scss";

const date = new Date();
const localeDate = date.toLocaleDateString();

const TaskCreatorForm = () => {
  return (
    <form>
      <h1>Create Task</h1>
      <div>
        <label for="task-title">Title</label>
        <input type="text" id="task-title" name="task-title" required />
        <label for="task-priority">Priority</label>
        <select type="text" i="task-priority" name="task-priority" required>
          <option value="low" selected>
            Low
          </option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
        <label for="task-deadline">Deadline</label>
        <input
          type="date"
          id="task-deadline"
          min={localeDate}
          name="deadline"
          value={localeDate}
          required
        />
        <label for="task-description">Description</label>
        <textarea type="text" id="task-description" />
      </div>
      <div>
        <CancelButton />
        <SubmitButton text="Create Task" />
      </div>
    </form>
  );
};

export default TaskCreatorForm;
