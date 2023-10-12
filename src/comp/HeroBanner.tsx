import styles from "../styles/comp/HeroBanner.module.css";

import hero from "../img/hero.png";
export default function HeroBanner() {
  return (
    <>
      <div className={styles.main}>
        <section className={styles.text}>
          <h1 className={styles.name}>Connor Turner.</h1>
          <h3 className={styles.two}>Professional Web Development.</h3>
          <h2 className={styles.one}>
            Websites made for you, with <span>you</span> in mind.
          </h2>
        </section>
        <section>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${hero.src})` }}
          ></div>
        </section>
      </div>
    </>
  );
}
