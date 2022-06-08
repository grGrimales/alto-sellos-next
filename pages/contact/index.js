import { Layout } from "../../components/layout/Layout";
import styles from "/styles/Contact.module.scss";

const ContactPage = () => {
  return (
    <Layout title="Contacto">
      <h2 className={styles.titleContact}>Contáctanos</h2>
      <section className={styles.sectionInfo}>
        <div className={styles.containerContact}>
          <div className={styles.containerContact__description}>
            <i className="fas fa-envelope"></i>
            <p>mariobelizan@gmail.com</p>
          </div>
          <div className={styles.containerContact__description}>
            <i className="fas fa-phone"></i>
            <p>+54 911 3787 2339 / +54 911 3787 2339</p>
          </div>

          <div className={styles.containerContact__description}>
            <i className="fas fa-map-marker-alt"></i>
            <h2>Zonas de cobertura</h2>
          </div>

          <ul className={styles.information__list}>
            <li>Berazategui</li>
            <li>Caba</li>
            <li>Sur de Buenos Aires</li>
            <li> La Plata</li>
          </ul>
        </div>

        <div className={styles.contenedorRedes}>
          <h2>Siguenos en Nuestra redes</h2>

          <div>
            <a
              className={styles.contenedorRedes__links}
              href="https://www.facebook.com/Alto-Sellos-109453664910378"
              target="_blank"
              rel={"noreferrer"}
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              className={styles.contenedorRedes__links}
              href="https://api.whatsapp.com/send?phone=+5491137872339&text=Hola,%20me%20gustar%C3%ADa%20conocer%20mas%20detalles%20de%20los%20costos%20de%20los%20sellos."
              target="_blank"
              rel={"noreferrer"}
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              className={styles.contenedorRedes__links}
              href="https://www.instagram.com/altosellos/?hl=es"
              target="_blank"
              rel={"noreferrer"}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              className={styles.contenedorRedes__links}
              href="https://mobile.twitter.com/AltoSellos"
              target="_blank"
              rel={"noreferrer"}
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
