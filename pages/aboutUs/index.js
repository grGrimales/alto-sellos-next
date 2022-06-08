import { Layout } from "../../components/layout/Layout";
import styles from "/styles/AboutUs.module.scss";

const AboutUsPage = () => {
  return (
    <Layout title="Sobre Nosotros">
      <h2 className={styles.titleAbout}>Sobre Nosotros</h2>
      <section className={styles.sectionAboutUs}>
        <div className={styles.containerDescription}>
          <div className={styles.containerDescription__img}>
            <img src="/images/collage.png" alt="Sobre Nosotros" />
          </div>

          <div className={styles.containerDescription__p}>
            <p>
              Detrás de cada nombre, logo o marca hay una historia.
              Emprendedores, comerciantes y profesionales saben de la
              importancia de no pasar desapercibidos. Alto Sellos ofrece que
              cada historia perdure en tus estampas, tarjetas y marchandasing.
              Con nuestro servicio de ida y vuelta de modelos y formas va
              surgiendo el sello artesanal y personalizado que necesitas.
              Agradecer, saludar a tus compradores u ornamentar con diversos
              motivos tu marchandasing.
            </p>
          </div>
        </div>

        <div className={styles.containerValores}>
          <h2 className={styles.containerValores__title}>Nuestros Valores</h2>
          <h3 className={styles.containerValores__subtitle}>
            ¿Por qué elergirnos?
          </h3>

          <div className={styles.valores}>
            <div className={styles.valores__div}>
              <img src="/images/respaldo.png" alt="imagen" />
              <h3>Respaldo</h3>

              <p>
                Somos un emprendimiento que cumple con sus compromisos y hacemos
                nuestro trabajo honestamente respondiendo por todos nuestros
                actos.
              </p>
            </div>
            <div className={styles.valores__div}>
              <img src="../images/ubicacion.png" alt="imagen" />

              <h3>Ubicación</h3>

              <p>
                Contamos con la ubicación estratégica en el sur de gran buenos
                aires que permiten a nuestros futuros clientes maximizar el
                acceso a sus encargos de sellos personalizados.
              </p>
            </div>

            <div className={styles.valores__div}>
              <img src="../images/ambiente.png" alt="imagen" />

              <h3>Medio Ambiente</h3>

              <p>
                Buscamos que nuestros sellos artesanales tengan un impacto
                ambiental positivo, por lo que incorporamos un 90% de materiales
                reciclados.
              </p>
            </div>

            <div className={styles.valores__div}>
              <img src="../images/calidad.png" alt="imagen" />

              <h3>Calidad</h3>

              <p>
                Desarrollamos nuestro trabajo de diseño y elaboración de sellos
                mejorando la calidad de los mismos de acuerdo a las preferencias
                y exigencias de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
