import styles from "@/styles/comp/Footer.module.css";

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
            MYNAME@gmail.com
          </a>
        </section>
      </footer>
    </>
  );
}
