import styles from "../styles/Home.module.scss";

import { Layout } from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <section className={styles.sectionSlogan}>
          <h2>Especialistas en Sellos Artesanales</h2>
          <p>
            A pesar de nuestra breve trayectoria como emprendimiento, tomamos el
            compromiso de trabajar sobre pedidos y realizar trabajos urgentes.
            Estamos en condiciones de cumplir, sin obstáculos, cualquier
            trabajo, no importando el tamaño de este. Nos diferenciamos de la
            competencia por la rapidez en dar solución a sus requerimientos. Nos
            esforzamos por brindar el mejor servicio para así competir con
            cualquier empresa del rubro. Nuestros clientes nos valoran porque
            trabajamos con profesionalismo y rapidez, ofreciendo una atención
            personalizada y garantizando productos de calidad, todo a un precio
            increíble.Contamos con todo lo necesario para satisfacer sus
            necesidades. Compruébelo usted mismo.
          </p>

          <div className={styles.sloganImg}>
            <img
              src="/images/creationsOne.jpeg"
              alt="Avatar"
              className={styles.image}
            />

            <img
              src="/images/creationsThree.jpeg"
              alt="Avatar"
              className={styles.image}
            />
            <img
              src="/images/creationsTwo.jpeg"
              alt="Avatar"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.sectionTestimony}>
          <h2>Testimonios</h2>
          <div className={styles.testimonyAll}>
            <div className={styles.containerTestimony}>
              <img src="/images/avatarTwo.png" alt="Avatar" />
              <div className={styles.containerTestimony_description}>
                <p>
                  GRACIAS POR LA PRESENTACIÓN,DELICADEZA Y RESPONSABILIDAD QUE
                  PONEN AL CUMPLIR CON SU TRABAJO...!!!
                </p>
                <span>Silvia Toranzo, propietaria de Silbely Creaciones.</span>
              </div>
            </div>
            <div className={styles.containerTestimony}>
              <img src="/images/avatar.png" alt="Avatar" />
              <div className={styles.containerTestimony_description}>
                <p>¡Me encantan, están buenísimos!</p>
                <span>María Gómez, productos Aromatizantes para textiles.</span>
              </div>
            </div>
            <div className={styles.containerTestimony}>
              <img src="/images/avatarTwo.png" alt="Avatar" />
              <div className={styles.containerTestimony_description}>
                <p>
                  GRACIAS POR LA PRESENTACIÓN,DELICADEZA Y RESPONSABILIDAD QUE
                  PONEN AL CUMPLIR CON SU TRABAJO...!!!
                </p>
                <span>Silvia Toranzo, propietaria de Silbely Creaciones.</span>
              </div>
            </div>

            <div className={styles.containerTestimony}>
              <img src="/images/avatarTwo.png" alt="Avatar" />
              <div className={styles.containerTestimony_description}>
                <p>
                  GRACIAS POR LA PRESENTACIÓN,DELICADEZA Y RESPONSABILIDAD QUE
                  PONEN AL CUMPLIR CON SU TRABAJO...!!!
                </p>
                <span>Silvia Toranzo, propietaria de Silbely Creaciones.</span>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
