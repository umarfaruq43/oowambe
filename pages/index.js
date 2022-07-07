import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/landingpage/Footer";
import Hero from "../components/landingpage/Hero/Hero";
import Navbar from "../components/landingpage/Navbar";
import Plan from "../components/landingpage/Plan";
import Service from "../components/landingpage/Service";
import Video from "../components/landingpage/Video";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Oowambe</title>
        <meta
          name="description"
          content="Oowambe Wedding planing and finance website"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      {/* *** Landing page Components *** */}
      <Layout>
        <Navbar />
        <Hero />
        <Plan />
        <Service />
        <Video />
        <Footer />
      </Layout>
    </Box>
  );
}
