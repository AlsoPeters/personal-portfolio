import type { NextPage } from "next";
import Head from "next/head";
import InfoCard from "../components/Infocard";

import { DiGithubBadge, DiCode } from "react-icons/di"
import { GrDocumentPdf } from "react-icons/gr"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-screen bg-gradient-to-br from-neutral-500 to-neutral-200 flex-col">
      <Head>
        <title>Chad Stark | Portfolio</title>
      </Head>
      <main className="flex flex-col md:flex-row 2xl:justify-between w-full 2xl:px-40 mx-auto my-auto px-6 text-left">
        <div className="my-auto md:mr-16">
          <h1 className="text-6xl md:text-9xl w-max font-Calistoga mt-4">
            Chad Stark
          </h1>
          <h4 className="text-2xl md:text-3xl pl-1 lg:pl-4 font-FiraCode">
            Fullstack Developer
          </h4>
        </div>
        <div className="flex flex-col py-6 gap-6 lg:gap-10">
          <button className="shadow-lg transition ease-in-out hover:scale-110 duration-150">
            <a href="https://github.com/Stark-program" target="_blank" >
              <InfoCard
                icon={<DiGithubBadge />}
                topic={"Github"}
                about={"Click here to visit my github profile."}
              />
            </a>
          </button>
          <button className="shadow-lg transition ease-in-out hover:scale-110 duration-150">
            <a href="/projects">
              <InfoCard
                icon={<DiCode />}
                topic={"Projects"}
                about={"Click here to visit some of my hosted projects."}
              />
            </a>
          </button>
          <button className="shadow-lg transition ease-in-out hover:scale-110 duration-150">
            <a href="/resume.pdf">
              <InfoCard
                icon={<GrDocumentPdf className="px-6" />}
                topic={"Resume"}
                about={"Click here for a copy of my resume."}
              />
            </a>
          </button>
        </div>
      </main>

      <footer className="flex flex-row w-full mt-auto py-2 lg:py-4 items-center justify-center border-t">
        <p className="w-full text-center">
          Questions? Contact me at:{" "}
          <a className="font-bold underline ml-1 " href="mailto:chadrenstark@gmail.com">
            chadrenstark@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
