import { Layout } from "../../components/layout/Layout";
import styles from "/styles/Creations.module.scss";

const CreationsPage = () => {
  return (
    <Layout title="Creaciones">
      <section>
        <h2 className={styles.titleCreations}>Nuestras creaciones</h2>
        <div className={styles.creations}>
          <div className={styles.container}>
            <img
              src="/images/creationsOne.jpeg"
              alt="Creaciones Alto Sellos"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.text}>
                Alto Sellos
                <div className={styles.logo}>
                  <img
                    className={styles.logo__img}
                    src="/images/logo.png"
                    alt="Alto Sellos"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <img
              src="/images/creationsTwo.jpeg"
              alt="Avatar"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.text}>
                Alto Sellos
                <div className={styles.logo}>
                  <img
                    className={styles.logo__img}
                    src="/images/logo.png"
                    alt="Alto Sellos"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className={styles.container}>
            <img
              src="../images/creationsThree.jpeg"
              alt="Creaciones Alto Sellos"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.text}>
                Alto Sellos
                <div className={styles.logo}>
                  <img
                    className={styles.logo__img}
                    src="/images/logo.png"
                    alt="Alto Sellos"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className={styles.container}>
            <img
              src="../images/creationsFor.jpeg"
              alt="Creaciones Alto Sellos"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.text}>
                Alto Sellos
                <div className={styles.logo}>
                  <img
                    className={styles.logo__img}
                    src="/images/logo.png"
                    alt="Alto Sellos"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <img
              src="../images/logo.jpeg"
              alt="Creaciones Alto Sellos"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.text}>
                Alto Sellos
                <div className={styles.logo}>
                  <img
                    className={styles.logo__img}
                    src="/images/logo.png"
                    alt="Alto Sellos"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <img
              src="../images/logo1.jpeg"
              alt="Creaciones Alto Sellos"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.text}>
                Alto Sellos
                <div className={styles.logo}>
                  <img
                    className={styles.logo__img}
                    src="/images/logo.png"
                    alt="Alto Sellos"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <img
              src="../images/logo2.jpeg"
              alt="Creaciones Alto Sellos"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.text}>
                Alto Sellos
                <div className={styles.logo}>
                  <img
                    className={styles.logo__img}
                    src="/images/logo.png"
                    alt="Alto Sellos"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <img
              src="../images/logo3.jpeg"
              alt="Creaciones Alto Sellos"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.text}>
                Alto Sellos
                <div className={styles.logo}>
                  <img
                    className={styles.logo__img}
                    src="/images/logo.png"
                    alt="Alto Sellos"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreationsPage;
