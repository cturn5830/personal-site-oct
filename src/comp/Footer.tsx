import styles from "@/styles/comp/Footer.module.css";

import spikes from "../img/spikes2.png";

export default function Footer() {
  return (
    <>
      <footer>
        <section className={styles.footer}>
          <a
            className={`${styles.link} ${styles.github}`}
            href="https://github.com/cturn5830"
            target="_blank"
          >
            Github
          </a>
          <a
            className={`${styles.link} ${styles.linkedin}`}
            href="https://www.linkedin.com/in/connor-turner-0b7422255/"
            target="_blank"
          >
            Linkedin
          </a>
          <p className={`${styles.link} ${styles.email}`}>
            Connor@theconnorturner.com
          </p>
        </section>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${spikes.src})` }}
        ></div>
      </footer>
    </>
  );
}
