import Footer from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <section>
        <section>{children}</section>
        <Footer />
      </section>
    </>
  );
}
