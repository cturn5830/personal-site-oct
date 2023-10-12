import WhatKnown from "@/comp/WhatKnown";

export default function Work() {
  return (
    <>
      <section>
        <h1>Projects I've Worked on.</h1>
      </section>
      <section>
        <WhatKnown more={true} bg={true} />
      </section>
    </>
  );
}
