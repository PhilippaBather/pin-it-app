const SubmitButton = (props) => {
  const { btnStyles, onClick, text } = props;
  return (
    <button className={btnStyles} type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
