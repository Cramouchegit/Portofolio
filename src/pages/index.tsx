import Head from "next/head";
import Picture from "../components/Picture";
import Work from "../components/Work";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import { FC, useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import dynamic from "next/dynamic";
import { Partytown } from "@builder.io/partytown/react";
import IconSkills from "../components/IconSkills";
import Qualification from "../components/Qualification";
import SwipperCompany from "../components/SwipperCompany";
const LayoutGroup = dynamic(
  () => import("framer-motion").then((mod) => mod.LayoutGroup),
  {
    ssr: false,
  }
);

const DynamicNav = dynamic(() => import("../components/Nav"));

const Home: FC = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }
  }, []);

  return (
    <>
      <Head>
        <Partytown debug={false} forward={["dataLayer.push"]} />
        <title>Portfolio Guntur</title>
        <meta name="description" content="Cramouche Dev's Portfolio Website." />
        <meta property="og:title" content="Cramouche Dev's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="mylink-tree.vercel.app/" />
        <meta
          property="og:description"
          content="Cramouche Dev's portfolio website, built with Next.js."
        />
        <meta
          property="description"
          content="Cramouche Dev's portfolio website, built with Next.js."
        />
        <meta name="theme-color" content="#FFF1"></meta>
        <link rel="icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="./Professional-Profile.png" sizes="100%" />
      </Head>
      <LayoutGroup>
        {typeof window !== "undefined" && <DynamicNav />}
        <Picture />
        <SwipperCompany />
        <Work />
        <Tools />
        <IconSkills />
        <Qualification />
        <Contact />
      </LayoutGroup>
      {scrollTop && <ScrollTop />}
    </>
  );
};

export default Home;
