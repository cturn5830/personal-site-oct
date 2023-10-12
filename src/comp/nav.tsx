import { useState } from "react";
import Link from "next/link";
import styles from "../styles/comp/Nav.module.css";

export default function Nav() {
  const [draw, setDraw] = useState(false);

  function printState() {
    if (draw) {
      return "opened draw";
    } else {
      return "draw is closed";
    }
  }

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
        Open
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
                Close
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
          </ul>
        </nav>
      </section>
    </>
  );
}