import styles from "../styles/comp/home/CtaForm.module.css";

import { useState } from "react";

export default function CtaForm() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  return (
    <>
      <form className={styles.form}>
        <h3 className={styles.contact}>Get In Contact.</h3>
        <div className={styles.input}>
          <label>Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <label>Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            onClick={() => {
              console.log(name, email, message);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
