import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/comp/layout/Nav.module.css";
import Image from "next/image";

import menuBTN from "@/img/nav/menu.png";
import xWhite from "@/img/nav/x-white.png";

export default function Nav() {
  const [draw, setDraw] = useState(false);

  function opener() {
    if (draw) {
      setDraw(false);
    } else {
      setDraw(true);
    }
  }
  function navCheck() {
    if (draw) {
      return styles.navWrapperOPEN;
    } else {
      return styles.navWrapperCLOSE;
    }
  }
  return (
    <>
      <button
        className={styles.OpenBTN}
        onClick={() => {
          opener();
        }}
      >
        <Image alt="Menu" src={menuBTN} width={60} /> {/* Menu open Button */}
      </button>
      <section
        className={navCheck()}
        onClick={() => {
          opener();
        }}
      >
        <nav className={styles.Navigation}>
          <ul className={styles.List}>
            <li className={styles.listItem}>
              <button
                className={styles.CloseBTN}
                onClick={() => {
                  opener();
                }}
              >
                <Image alt="Close" src={xWhite} width={45} />{" "}
                {/* Menu close Button */}
              </button>
            </li>
            <li className={styles.listItem}>
              <Link href="/" className={styles.Link}>
                Home
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/work" className={styles.Link}>
                My Work
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/about" className={styles.Link}>
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
