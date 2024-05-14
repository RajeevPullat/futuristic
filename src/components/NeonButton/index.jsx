import classes from "./NeonButton.module.css";

function NeonButton(props) {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;
  return (
    <button {...rest} className={classes.neons}>
      {children}
    </button>
  );
}

export default NeonButton;
