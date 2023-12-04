import HeroBanner from "@/comp/layout/HeroBanner";
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
          bannerImg={3}
          line1="About the face behind the screen."
          line2={line2Text()}
          link={true}
        />
        <section className={styles.section1}>
          <span className={styles.list}>
            <div>
              <h2 className={styles.title}>Why I'm a Developer.</h2>
              <p>
                Growing up, I always wanted my devices to do particular things.
                However, I didn't always have the best hardware; so, I would
                find ways to make it work. I taught myself how to install new
                apps on outdated phones, jailbreak video game systems, and even
                built my own Gameboy-like hand held device. Without even knowing
                it, I lived the old adage “where there's a will, there's a way.”
                In turn, many of those skills I picked up along the way have
                translated directly into useful tools in my work as a
                web-developer.
              </p>
            </div>
            <div>
              <h2 className={styles.title}>My Goal.</h2>
              <p>
                I aim to solve problems and make life easier, for businesses and
                consumers alike, through the internet. By continuing to hone my
                craft through web development, I learn more and am able to
                provide even better results for my clients and their customers
                as well. By helping others through web development, I further
                find my own fulfillment.
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
                  Serving with Christ means working with an open heart and
                  moving in a supernatural way, furthering His teachings through
                  actions and behaviors. This also means serving others with a
                  giving heart, being generous, and displaying kindness.
                </p>
              </li>
              <li>
                <h3>Working Openly.</h3>
                <p>
                  No one wants to just hope that something is getting done. I am
                  committed to regularly communicating with you about what step
                  of the process I am at and keeping you up to date on the
                  status of your project.
                </p>
              </li>
              <li>
                <h3>Keeping All Cards On The Table.</h3>
                <p>
                  Nobody likes being sold an empty promise. I will be open about
                  the options available to you, what you can do, and provide
                  understanding of the proper resources to complete the task via
                  images or text.
                </p>
              </li>
              {/* <li>
                <h3>Notes Are Key.</h3>
                <p>
                  I’m a huge user of notes and love to jot down big facts down
                  key elements to look back on, this avoids missing elements in
                  the future and minimizing revisions, helping myself and you.
                </p>
              </li> */}
            </ul>
          </div>
        </section>
        <Random />
      </main>
    </>
  );
}
