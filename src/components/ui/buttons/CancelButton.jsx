const CancelButton = (props) => {
  const { btnStyles, onClick } = props;
  return (
    <button className={btnStyles} type="text" onClick={onClick}>
      Cancel
    </button>
  );
};

export default CancelButton;
