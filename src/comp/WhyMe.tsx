import styles from "../styles/comp/WhyMe.module.css";

export default function WhyMe() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.main}>
        <div className={styles.item}>
          <h3>Site Building.</h3>
          <p>
            Building a website can feel overwhelming, time-consuming, and even,
            at times, impossible. With my help, it has never been simpler. You
            will be able to communicate your goals/passions, as well as draw-in
            and maintain engagement with users. All of this will be accomplished
            with a custom, one-of-a-kind site built from the ground up with your
            ideas in mind.
          </p>
        </div>
        <div className={styles.item}>
          <h3>Managing Sites.</h3>
          <p>
            Managing your website can feel like a hassle. Updating images,
            creating new pages for events, or even something as simple as
            changing the text on your website can weigh you down and get in the
            way of your real work. Thankfully, with my experience, this is a
            straightforward process. These tasks have never been simpler with
            me. When you work with me, I am just an ask away and can even have
            one-day turnarounds for many of your update requests.
          </p>
        </div>
        {/* <div className={styles.item}>
          <h3>3rd Amazing thing I do.</h3>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div> */}
      </section>
    </div>
  );
}
