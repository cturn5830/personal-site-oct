import styles from "../styles/comp/HeroBanner.module.css";

import hero from "../img/hero.png";
export default function HeroBanner() {
  return (
    <>
      <div className={styles.main}>
        <section className={styles.text}>
          <h1 className={styles.name}>Connor Turner.</h1>
          <h2 className={styles.one}>Web Dev made easy.</h2>
          <h3 className={styles.two}>
            Your website made for you, professionally.
          </h3>
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
