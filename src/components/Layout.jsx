import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRouter } from "next/router";
import { useRef } from "react";
import SEO from "./SEO";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-inter",
});

function Layout({ children, title }) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <>
      <Head>
        <title>{title}</title>
        <SEO />
      </Head>
      <RLSProvider
        options={{
          smooth: true,
          mobile: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        location={asPath}
        onLocationChange={(scroll) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
        containerRef={containerRef}
      >
        <main
          data-scroll-container
          ref={containerRef}
          className={`${inter.variable} font-inter`}
        >
          {children}
        </main>
      </RLSProvider>
    </>
  );
}

export default Layout;
