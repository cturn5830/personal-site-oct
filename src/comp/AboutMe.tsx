import styles from "../styles/comp/AboutMe.module.css";

export default function AboutMe() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.img}>IMG PLACE HOLDER</div>
        <div className={styles.content}>
          <h2>A little bit about me.</h2>
          <p>
            Growing up I always wanted my devices to do particular things,
            however I didn't always have the best things, so I made it work. I
            would teach myself how to install new apps on outdated phones,
            jailbreak game systems, and even build my own gameboy-like hand
            held. Without knowing I’ve learned when there's a will, there's a
            way, and many of these skills have translated directly into being a
            web-developer.
          </p>
        </div>
      </section>
    </>
  );
}
