import styles from "../styles/AppLayout.module.css";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <div className={styles.nameAndPhotoContainer}>
        <img
          src={profilePic}
          alt="Profile Picture"
          className={styles.photoPlaceholder}
        />
        <h1>Tiago Boaventura Amaral</h1>
      </div>
      <p>Bem-vindo(a) ao meu Portfólio!</p>
      <Link to="/sobre" className={styles.advanceButton}>
        Avançar
      </Link>
    </section>
  );
}
