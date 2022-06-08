import Head from "next/head";
import { Footer } from "../ui/Footer";
import { Navbar } from "../ui/Navbar";

const origin = typeof window === "undefined" ? "" : window.location.origin;

console.log(origin);

export const Layout = ({ children, title, content, classMain }) => {
  return (
    <>
      <Head>
        <title>{title || "Alto Sellos"}</title>
        <meta name="author" content="Grediana Rojas" />
        <meta name="description" content={content} />
        <meta name="keywords" content="paginas web" />

        <meta property="og:title" content={`Información sobre  ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página  sobre  ${title}`}
        />
        <meta property="og:image" content={`${origin}/images/logo.png`} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="icon" href="/images/logo/favicon.ico" />
      </Head>

      <Navbar />

      <main className="animate__animated animate__fadeIn">{children}</main>
      <Footer />
    </>
  );
};
