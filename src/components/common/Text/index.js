import styles from "./style.module.css";

// Creator : Team B - Ayellet & Hodaya
function Text(props) {
  return (
    <div className="wholeText">
      <div className={styles.title}>
        {props.title}
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  );
}

export default Text;
