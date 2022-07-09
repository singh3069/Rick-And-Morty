import type { NextPage } from "next";
import Head from "next/head";
import Characters from "../components/Characters";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/rickandmorty.png)",
        backgroundRepeat: "repeat",
        backgroundPosition: "Center",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <div className="flex flex-col md:px-16 ">
        <Head>
          <title>Rick And Morty</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="svg" href="/rickandmorty.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Creepster&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Characters />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
