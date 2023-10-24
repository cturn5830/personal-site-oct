import WhatKnown from "@/comp/work/WhatKnown";
import MyProjects from "@/comp/work/MyProjects";
import HeroBanner from "@/comp/layout/HeroBanner";

import Head from "next/head";
export default function Work() {
  function line2Text() {
    return (
      <>
        Websites I have built for <span>others</span>.
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Connor | My Work</title>
        <meta
          name="description"
          content="View websites I've built for others"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner
        bannerImg={2}
        line2={line2Text()}
        line1="It could be your websites  next."
        link={true}
      />
      <section>
        <MyProjects bg={true} />
        <WhatKnown more={true} bg={false} />
      </section>
    </>
  );
}
