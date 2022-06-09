import Image from "next/image";

import styles from "../../styles/Wave.module.scss";

export const Wave = () => {
  return (
    <>
      <div className="containerAll animate__animated animate__fadeIn">
        <div className={styles["cover"]}>
          <div className={styles["bg_color"]}></div>
          <div className={`${styles.w1} ${styles.wave}`}></div>
          <div className={`${styles.w2} ${styles.wave}`}></div>

          <div className={styles["container__cover"]}>
            <div className={styles["container__info"]}>
              <h1>Alto Sellos</h1>
              <p>
                Sellos artesanales para dejar la huella de tu profesión,
                comercio o emprendimiento. Brindamos una ayuda a todos aquellos
                que necesitan un sello personalizado, a la medida de sus
                necesidades.
              </p>
              <button type="button" className={styles["cover__btn"]}>
                <a
                  href="https://api.whatsapp.com/send?phone=+5491137872339&text=Hola,%20me%20gustar%C3%ADa%20conocer%20mas%20detalles%20de%20los%20costos%20de%20los%20sellos."
                  target="_blank"
                  rel={"noreferrer"}
                >
                  Solicitar presupuesto
                </a>
              </button>
            </div>
            <div className={styles["container__vector"]}>
              <Image
                className={styles["vector"]}
                src={"/images/prueba5.png"}
                alt="vector"
                height="550"
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
