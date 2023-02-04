import Header from "./Header";
import NavigationPanel from "./NavigationPanel";
import styles from "./styles.module.scss";

const Grid = (props) => {
  return (
    <div className={styles.gridWrapper}>
      <Header />
      <NavigationPanel />
      {props.children}
    </div>
  );
};

export default Grid;
