function Button({ desc, variety, ...props }) {
  const varieties = {
    primary: "primary-btn",
    secondary: "secondary-btn",
  };

  return (
    <button className={`btn ${varieties[variety]}`} {...props}>
      {desc}
    </button>
  );
}

export default Button;
