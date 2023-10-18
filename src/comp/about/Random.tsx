import { useState } from "react";
import data from "@/data/Random.json";
import styles from "@/styles/comp/about/random.module.css";

export default function Random() {
  const [factText, setFactText] = useState("Click the button");

  const [cssState, setCssState] = useState(styles.open);

  const fact = data.Data.Facts;

  function handler() {
    setCssState(styles.close);
    setTimeout(() => {
      setCssState(styles.open);
      setFactText(fact[randomNum()].Text);
    }, 400);
  }

  function randomNum() {
    return Math.floor(Math.random() * fact.length);
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Want to know more?</h2>
        <section className={styles.box}>
          <div className={cssState}>
            <h3>{factText}</h3>
          </div>
          <button
            className={styles.btn}
            onClick={() => {
              handler();
            }}
          >
            Random Facts!
          </button>
        </section>
      </div>
    </section>
  );
}
