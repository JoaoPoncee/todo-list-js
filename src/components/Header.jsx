import styles from "./Header.module.css";
import rocketLogo from "../assets/rocket.svg";  

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Rocket Logo" />
      <strong>
        to<span>do</span>
      </strong>
    </header>
  );
}
