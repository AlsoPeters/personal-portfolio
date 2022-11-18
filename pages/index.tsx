import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import InfoCard from "../components/Infocard";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-neutral-500 to-neutral-200 flex-col">
      <Head>
        <title>Chad Stark | Portfolio</title>
      </Head>
      <main className="flex flex-col md:flex-row md:space-x-96 mx-auto my-auto px-20 text-left">
        <div className="my-auto">
          <h1 className="text-[80px] md:text-[130px] font-Calistoga">
            Chad Stark
          </h1>
          <h4 className="text-[30px] md:text-[40px] pl-4 font-Calistoga">
            Fullstack Developer
          </h4>
        </div>
        <div className="flex flex-col gap-10">
          <button>
            <a href="https://github.com/Stark-program" target="_blank" >
              <InfoCard
                topic={"My Github"}
                about={"Click here to visit my github profile."}
              />
            </a>
          </button>
          <button >
            <a href="/projects">
              <InfoCard
                topic={"My Projects"}
                about={"Click here to visit some of my hosted projects."}
              />
            </a>
          </button>
          <button >
            <a href="/resume.pdf">
              <InfoCard
                topic={"My Resume"}
                about={"Click here for a copy of my resume."}
              />
            </a>
          </button>
        </div>
      </main>

      <footer className="flex flex-row w-full mt-auto py-4 items-center justify-center border-t">
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
