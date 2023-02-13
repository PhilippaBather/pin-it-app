const CancelButton = (props) => {
  return (
    <button className={props.btnStyles} type="text" onClick={props.onClick}>
      Cancel
    </button>
  );
};

export default CancelButton;
