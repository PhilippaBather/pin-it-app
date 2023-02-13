import Logo from "../../components/ui/Logo";
import UserIconButton from "../../components/ui/Buttons/UserIconButton";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__logoContainer}>
          <h1 className={styles.nav__logoName}>Pin it!</h1>
          <Logo />
        </div>
        <UserIconButton />
      </nav>
    </header>
  );
};

export default Header;
