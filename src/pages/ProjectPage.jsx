import GridGlobal from "../layout/GridGlobal/GridGlobal";
import GridProjectBoard from "../layout/GridProjectBoard/GridProjectBoard";
import styles from "../layout/GridGlobal/styles.module.scss";

const ProjectPage = () => {
  return (
    <>
      <GridGlobal>
        <main className={styles.main}>
          <GridProjectBoard />
        </main>
      </GridGlobal>
    </>
  );
};

export default ProjectPage;
