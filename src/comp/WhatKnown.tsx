import styles from "../styles/comp/WhatKnown.module.css";
import { useState } from "react";

export default function WhatKnown({ more, bg }: { more: any; bg: any }) {
  const [check, setCheck] = useState(false);
  const [extra, setExtra] = useState(styles.invis);
  const [button, setButton] = useState("View More");

  function view() {
    if (check) {
      setExtra(styles.invis);
      setButton("View More");
      setCheck(false);
      console.log("returned as true");
    } else {
      setExtra(styles.more);
      setCheck(true);
      setButton("Close");
      console.log("returned as false");
    }
  }
  function bgCheck() {
    if (bg) {
      return { background: "rgb(24, 24, 24)" };
    }
  }
  function viewMore() {
    if (more) {
      return (
        <>
          <div className={extra}>
            <span className={styles.item}>
              <h3>Next JS</h3> <div className={styles.img}>img placeholder</div>
            </span>
            <span className={styles.item}>
              <h3>PHP</h3> <div className={styles.img}>img placeholder</div>
            </span>
            <span className={styles.item}>
              <h3>SASS</h3> <div className={styles.img}>img placeholder</div>
            </span>
          </div>
          <button
            className={styles.button}
            onClick={() => {
              view();
            }}
          >
            {button}
          </button>
        </>
      );
    } else {
      return "";
    }
  }

  return (
    <>
      <section className={styles.main} style={bgCheck()}>
        <h2>Heres the most popular languages I know.</h2>
        <div className={styles.first3}>
          <span className={styles.item}>
            <h3>React</h3> <div className={styles.img}>img placeholder</div>
          </span>
          <span className={styles.item}>
            <h3>Wordpress</h3> <div className={styles.img}>img placeholder</div>
          </span>
          <span className={styles.item}>
            <h3>Tailwind</h3> <div className={styles.img}>img placeholder</div>
          </span>
        </div>

        {viewMore()}
      </section>
    </>
  );
}
