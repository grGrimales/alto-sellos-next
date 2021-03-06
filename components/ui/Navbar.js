import { useEffect, useState } from "react";

import Link from "next/link";

import styles from "../../styles/Navbar.module.scss";
import { Wave } from "./Wave";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    window.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 20) {
        setScroll(true);
      } else if (scrollTop < 20) {
        setScroll(false);
      }
    };

    const handleInnerWidth = () => {
      if (window.innerWidth > 760) {
        setClick(false);
      }
    };

    window.addEventListener("resize", handleInnerWidth);

    return () => {
      window.removeEventListener("resize", handleInnerWidth);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scroll ? styles.nav_mod : ""}`}>
        <div className={styles["container__header"]}>
          <div className={styles.logo}>
            <Link href="/">
              <img
                id="logo"
                src="/images/logo.png"
                alt="Alto Sellos"
                className={` ${scroll ? styles.logo_mod : ""}`}
              />
            </Link>

            <div className={styles["header__icon"]} onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>

          <div className={styles["containerNav"]}>
            <nav className={`${styles.containerNav__nav}`}>
              <ul
                className={`${styles.containerNav__list} ${
                  click ? styles.activeUl : ""
                }`}
              >
                <li>
                  <ActiveLink link="/" text="Inicio" />
                </li>
                <li>
                  <ActiveLink link="/creations" text="Creaciones" />
                </li>

                <li>
                  <ActiveLink link="/aboutUs" text="Nosotros" />
                </li>
                <li>
                  <ActiveLink link="/contact" text="Contacto" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <Wave />
    </>
  );
};
