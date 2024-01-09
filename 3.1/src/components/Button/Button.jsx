const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={text}>
      {text}
    </button>
  );
};

export default Button;
