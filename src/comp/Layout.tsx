import Footer from "./Footer";
import Nav from "./nav";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <section>
        <Nav />
        <section>{children}</section>
        <Footer />
      </section>
    </>
  );
}
