import styles from "@/styles/comp/Footer.module.css";

import spikes from "../img/spikes2.png";

export default function Footer() {
  return (
    <>
      <footer>
        <section className={styles.footer}>
          <a className={`${styles.link} ${styles.github}`} href="#">
            Github
          </a>
          <a className={`${styles.link} ${styles.linkedin}`} href="#">
            Linkedin
          </a>
          <a className={`${styles.link} ${styles.email}`} href="#">
            Connor@theconnorturner.com
          </a>
        </section>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${spikes.src})` }}
        ></div>
      </footer>
    </>
  );
}
