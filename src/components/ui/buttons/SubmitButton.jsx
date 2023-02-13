const SubmitButton = (props) => {
  const { text } = props;
  return (
    <button className={props.btnStyles} type="submit" onClick={props.onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
