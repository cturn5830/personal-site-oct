import HeroBanner from "@/comp/HeroBanner";
import Head from "next/head";

import styles from "@/styles/About.module.css";
import Random from "@/comp/about/Random";

export default function About() {
  function line2Text() {
    return (
      <>
        Learn even more about <span>me</span>.
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Connor | About Me</title>
        <meta name="description" content="Learn about what I do" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroBanner
          bannerImg={1}
          line1="About the face behind the screen."
          line2={line2Text()}
          link={true}
        />
        <section className={styles.section1}>
          <span className={styles.list}>
            <div>
              <h2>Why I'm a Developer.</h2>
              <p>
                Growing up I always wanted my devices to do particular things,
                however I didn't always have the best things, so I made it work.
                I would teach myself how to install new apps on outdated phones,
                jailbreak game systems, and even build my own gameboy-like hand
                held. Without knowing I’ve learned when there's a will, there's
                a way, and many of these skills have translated directly into
                being a web-developer.
              </p>
            </div>
            <div>
              <h2>My Goal.</h2>
              <p>
                To solve problems and make life easier for businesses and
                consumers alike though the internet. Helping others though
                websites, ultimately helps myself as well.
              </p>
            </div>
          </span>
        </section>
        <section className={styles.section2}>
          <div className={styles.list2}>
            <h2>My Values.</h2>
            <ul className={styles.uList}>
              <li>
                <h3>Serving With Christ.</h3>
                <p>
                  Serving with Christ is working with an open heart and moving
                  in a super-natural way, fulfilling his will through actions
                  and behaviours. This also means serving others with a giving
                  heart, being generous and kind.
                </p>
              </li>
              <li>
                <h3>Working Openly.</h3>
                <p>
                  No one wants to just hope that something is getting done, I’m
                  about communicating where I’m at with your project and keeping
                  everyone up to date on everything.
                </p>
              </li>
              <li>
                <h3>Keeping All Cards On The Table.</h3>
                <p>
                  Keeping all cards on the table means being open about what you
                  can do and having all options available, and providing
                  understanding of the proper resources to complete the task via
                  images or text
                </p>
              </li>
              <li>
                <h3>Notes Are Key.</h3>
                <p>
                  I’m a huge user of notes and love to jot down big facts down
                  key elements to look back on, this avoids missing elements in
                  the future and minimizing revisions, helping myself and you
                </p>
              </li>
            </ul>
          </div>
        </section>
        <Random />
      </main>
    </>
  );
}
