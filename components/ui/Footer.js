import Image from "next/image";
import styles from "../../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.description}>
          <p className={styles.description__p}>Alto Sellos</p>
          <span className={styles.description__span}>ARTESANALES</span>
        </div>

        <div className={styles.redes}>
          <a
            className={styles.redes__links}
            href="https://www.facebook.com/Alto-Sellos-109453664910378"
            target="_blank"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            className={styles.redes__links}
            href="https://api.whatsapp.com/send?phone=+5491137872339&text=Hola,%20me%20gustar%C3%ADa%20conocer%20mas%20detalles%20de%20los%20costos%20de%20los%20sellos."
            target="_blank"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a
            className={styles.redes__links}
            href="https://www.instagram.com/altosellos/?hl=es"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            className={styles.redes__links}
            href="https://mobile.twitter.com/AltoSellos"
            target="_blank"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <p>Todos los derechos reservados 2022</p>
      </footer>
    </>
  );
};
