import HeroBanner from "@/comp/HeroBanner";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Connor | About Me</title>
        <meta name="description" content="Learn about what I do" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroBanner bannerImg={1} line1="" line2={"heroText()"} link={false} />
      </main>
    </>
  );
}
