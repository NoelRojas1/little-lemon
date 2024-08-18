function Button({ desc, type, ...props }) {
  const types = {
    primary: "primary-btn",
    secondary: "secondary-btn",
  };

  return (
    <button className={`btn ${types[type]}`} {...props}>
      {desc}
    </button>
  );
}

export default Button;
