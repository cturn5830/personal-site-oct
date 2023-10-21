import styles from "@/styles/comp/work/WhatKnown.module.css";
import { useState } from "react";

import data from "@/data/Code.json";

export default function WhatKnown({ more, bg }: { more: any; bg: any }) {
  const [check, setCheck] = useState(false);
  const [extra, setExtra] = useState(styles.invis);
  const [button, setButton] = useState("View More");

  const codeData = data.Data.Codes;

  function view() {
    if (check) {
      setExtra(styles.invis);
      setButton("View More");
      setCheck(false);
      console.log("returned as true");
    } else {
      setExtra(styles.more);
      setCheck(true);
      setButton("Close");
      console.log("returned as false");
    }
  }
  function bgCheck() {
    if (bg) {
      return { background: "rgb(24, 24, 24)" };
    }
  }

  function Template({ code }: { code: any }) {
    return (
      <span className={styles.item}>
        <h3>{code.Name}</h3>
        <div
          style={{ backgroundImage: `url('${code.Img}')` }}
          className={styles.img}
        ></div>
      </span>
    );
  }

  function viewMore() {
    if (more) {
      return (
        <>
          <div className={extra}>
            {codeData &&
              codeData.length > 0 &&
              codeData
                .slice(3, 20)
                .map((codeData) => <Template code={codeData} />)}
          </div>
          <button
            className={styles.button}
            onClick={() => {
              view();
            }}
          >
            {button}
          </button>
        </>
      );
    } else {
      return "";
    }
  }

  return (
    <>
      <section className={styles.main} style={bgCheck()}>
        <h2>Here are the most popular languages I know.</h2>
        <div className={styles.first3}>
          {codeData &&
            codeData.length > 0 &&
            codeData
              .slice(0, 3)
              .map((codeData) => <Template code={codeData} />)}
        </div>

        {viewMore()}
      </section>
    </>
  );
}
