import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import HeroBanner from "@/comp/HeroBanner";
import WhyMe from "@/comp/WhyMe";
import AboutMe from "@/comp/AboutMe";
import WhatKnown from "@/comp/WhatKnown";
import CtaForm from "@/comp/CtaForm";

export default function Home() {
  function heroText() {
    return (
      <>
        Websites made for you, with <span>you</span> in mind.
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Connor Turner</title>
        <meta name="description" content="Learn about what I do" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroBanner
          bannerImg={1}
          line1="Professional Web Development."
          line2={heroText()}
          link={false}
        />
        <WhyMe />
        <AboutMe />
        <WhatKnown more={false} bg={true} />
      </main>
    </>
  );
}
