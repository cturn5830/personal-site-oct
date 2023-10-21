import styles from "../styles/comp/AboutMe.module.css";
import bubbles from "../img/bubbles.png";

export default function AboutMe() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.content}>
          <h2>A little bit about me.</h2>
          <p>
            Growing up, I always wanted my devices to do particular things.
            However, I didn't always have the best hardware; so, I would find
            ways to make it work. I taught myself how to install new apps on
            outdated phones, jailbreak video game systems, and even built my own
            Gameboy-like hand held device. Without even knowing it, I lived the
            old adage “where there's a will, there's a way.” In turn, many of
            those skills I picked up along the way have translated directly into
            useful tools in my work as a web-developer.
          </p>
        </div>

        <div
          className={styles.img}
          style={{ backgroundImage: `url(${bubbles.src})` }}
        ></div>
      </section>
    </>
  );
}
