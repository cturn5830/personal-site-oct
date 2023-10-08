import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import HeroBanner from "@/comp/HeroBanner";
import WhyMe from "@/comp/WhyMe";
import AboutMe from "@/comp/AboutMe";
import WhatKnown from "@/comp/WhatKnown";
import CtaForm from "@/comp/CtaForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Name</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroBanner />
        <WhyMe />
        <AboutMe />
        <WhatKnown more={true} />
      </main>
    </>
  );
}
