import Head from "next/head";
import { useState } from "react";

//Import icons
import { BsFillMoonStarsFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillGitlab, AiFillHtml5 } from "react-icons/ai";
import { DiJqueryLogo, DiPython, DiReact, DiGit, DiCss3 } from "react-icons/di";
import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";

//Import images
import Image from "next/image";
import devIcon from "../public/programmer.png";
import portfolio from "../public/web-portfolio-p1-sc.PNG";
import slytheryn from "../public/slytheryn-p2.PNG";
import vepply from "../public/vepply-p3.PNG";
import barangayCencus from "../public/project5-sc.png";
import ems from "../public/ems-p6.PNG";
import kondisyon from "../public/hackathon-project-sc.PNG";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>JefferScript | Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 font-mono md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="h-screen">
          <nav className="py-7 mb-8 flex justify-between dark:text-slate-400">
            <h1 className="text-xl font-burtons ">JefferScript</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-xl"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1jqezYMQCl651zdrIqpCbAEQ-4yuPxzjr/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-8">
            <h2 className="text-4xl font-bold text-teal-600   md:text-6xl lg:text-7xl">
              Jefferson Rosimo
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-400">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-6 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-300">
              An electronics engineer who recently graduated from a web
              development bootcamp as a scholar of Department of Information and
              Communications Technology. Looking for a frontend or backend
              developer job.
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-700 dark:text-slate-300">
            <a
              href="https://github.com/Jfnrosimo"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jrosimo/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://gitlab.com/jrosimo"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGitlab />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-600 rounded-full  h-72 w-72 mt-8 overflow-hidden md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image src={devIcon} alt="developer image" fill />
          </div>
        </section>

        <section className="mt-52 ">
          <div className="text-gray-800 dark:text-slate-300">
            <h3 className="text-xl md:text-3xl">Tech Stack</h3>
            <div className="text-md py-5 leading-6 text-gray-800 dark:text-slate-300">
              <div className="shadow-lg rounded-xl p-5 dark:shadow-slate-700">
                <h4 className="text-lg">Basic</h4>
                <ul className="flex justify-center flex-wrap text-center">
                  <li className="px-6 py-2  flex flex-col items-center">
                    <SiTailwindcss className="text-4xl" /> Tailwindcss
                  </li>
                  <li className="px-8 py-2  flex flex-col items-center">
                    <TbBrandNextjs className="text-4xl" /> NextJs
                  </li>
                  <li className="px-8 py-2  flex flex-col items-center">
                    <DiJqueryLogo className="text-4xl" /> jQuery
                  </li>
                  <li className="px-8 py-2  flex flex-col items-center">
                    <SiMysql className="text-4xl" /> MySQL
                  </li>
                  <li className="px-8 py-2  flex flex-col items-center">
                    <DiPython className="text-4xl" /> Python
                  </li>
                </ul>
              </div>
              <div className="mt-4 shadow-lg rounded-xl p-5 dark:shadow-slate-700">
                <h4 className="text-lg">Intermediate</h4>
                <ul className="flex justify-center flex-wrap text-center">
                  <li className="px-6 py-2  flex flex-col items-center">
                    <TbBrandJavascript className="text-4xl" /> JavaScript
                  </li>
                  <li className="px-6 py-2  flex flex-col items-center">
                    <SiMongodb className="text-4xl" /> MongoDb
                  </li>
                  <li className="px-6 py-2  flex flex-col items-center">
                    {" "}
                    <SiExpress className="text-4xl" /> ExpressJs
                  </li>
                  <li className="px-6 py-2  flex flex-col items-center">
                    <DiReact className="text-4xl" /> ReactJs
                  </li>
                  <li className="px-6 py-2  flex flex-col items-center">
                    <SiNodedotjs className="text-4xl" /> NodeJs
                  </li>
                  <li className="px-6 py-2  flex flex-col items-center">
                    <DiGit className="text-4xl" /> Git
                  </li>
                  <li className="px-6 py-2  flex flex-col items-center">
                    <SiBootstrap className="text-4xl" /> Bootstrap
                  </li>
                </ul>
              </div>
              <div className="mt-4 shadow-lg rounded-xl p-5 dark:shadow-slate-700">
                <h4 className="text-lg">Advanced</h4>
                <ul className="flex justify-center flex-wrap text-center">
                  <li className="px-8 py-2  flex flex-col items-center">
                    <AiFillHtml5 className="text-4xl" /> HTML
                  </li>
                  <li className="px-8 py-2  flex flex-col items-center">
                    <DiCss3 className="text-4xl" /> CSS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="text-gray-800 dark:text-slate-300">
            <h3 className="text-xl md:text-3xl md:mt-9">Projects</h3>
            <div className="lg:flex lg:flex-wrap lg:justify-evenly">
              {/*----- web portfolio project -----*/}
              <div className="shadow-md p-3 border text-center mt-5 lg:w-96">
                <p className="text-sm md:text-base lg:text-lg">
                  Web Portfolio | HTML, CSS, Bootstrap and Vanilla Javascript
                </p>
                <a
                  href="https://jefferscript-portfolio.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={portfolio} alt="web portfolio project" />
                </a>
                <div className="mt-2">
                  <a
                    className="border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://jefferscript-portfolio.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="ml-4 border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://github.com/Jfnrosimo/jefferscript-portfolio/tree/001-web-portfolio/001-web-portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/*----- snake game javascript project -----*/}
              <div className="shadow-md p-3 border text-center mt-5 lg:w-96">
                <p className="text-sm md:text-base lg:text-lg">
                  Snake game | Slytheryn | HTML, CSS and Vanilla Javascript
                </p>
                <a
                  href="https://slytheryn-p2-js-game-alob.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={slytheryn} alt="snake game project" />
                </a>
                <div className="mt-2">
                  <a
                    className="border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://slytheryn-p2-js-game-alob.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="ml-4 border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://github.com/Jfnrosimo/slytheryn-p2-js-game/tree/p2-js-game/p2-js-game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/*----- Vepply reactjs project -----*/}
              <div className="shadow-md p-3 border text-center mt-5 lg:w-96">
                <p className="text-sm md:text-base lg:text-lg">
                  Vegetable production monitoring app | Vepply | ReactJs and
                  Redux
                </p>
                <a
                  href="https://vepply-p3-react-app.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={vepply} alt="vepply reactjs project" />
                </a>
                <div className="mt-2">
                  <a
                    className="border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://vepply-p3-react-app.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="ml-4 border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://github.com/Jfnrosimo/vepply-p3-react-app/tree/p3-react-app/p3-react-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/*----- barangay cencus project -----*/}
              <div className="shadow-md p-3 border text-center mt-5 lg:w-96">
                <p className="text-sm md:text-base lg:text-lg">
                  Barangay Cencus | MongoDb, ExpressJs, ReactJs and NodeJs
                </p>
                <a
                  href="https://barangay-cencus-p5-mern-7dempj613-jfnrosimo.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={barangayCencus} alt="barangay cencus project" />
                </a>
                <div className="mt-2">
                  <a
                    className="border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://barangay-cencus-p5-mern-of0c4f6fh-jfnrosimo.vercel.app/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="ml-4 border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://github.com/Jfnrosimo/barangay-cencus-p5-mern-app/tree/p5-mern-app/p5-mern-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/*----- Exam Management System project -----*/}
              <div className="shadow-md p-3 border text-center mt-5 lg:w-96">
                <p className="text-sm md:text-base lg:text-lg">
                  Exam Management System | EMS | MongoDb, ExpressJs, ReactJs,
                  NodeJs and Reactstrap
                </p>
                <a
                  href="https://ems-roan.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={ems} alt="exam management system project" />
                </a>
                <div className="mt-2">
                  <a
                    className="border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://ems-roan.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="ml-4 border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://github.com/Jfnrosimo/ems"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/*----- Kondisyon Emergency response application -----*/}
              <div className="shadow-md p-3 border text-center mt-5 lg:w-96">
                <p className="text-sm md:text-base lg:text-lg">
                  Emergency Response mobile web application and desktop desktop
                  admin control | Kondisyon | MongoDb, ExpressJs, ReactJs,
                  NodeJs and Reactstrap
                </p>
                <a
                  href="https://kondisyon.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="h-40 w-40 mx-auto"
                    src={kondisyon}
                    alt="exam management system project"
                  />
                </a>
                <div className="mt-2">
                  <a
                    className="border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://kondisyon.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="ml-4 border-b-2 border-teal-500 hover:bg-teal-500 p-2"
                    href="https://github.com/Jfnrosimo/kondisyon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center pt-18 bg-gray-100 p-7 dark:bg-gray-900 dark:text-slate-300">
        <a
          className="text-xs "
          href="https://www.flaticon.com/free-icons/programmer"
          title="programmer icons"
          target="_blank"
          rel="noreferrer"
        >
          Programmer icons created by kerismaker - Flaticon
        </a>
      </footer>
    </div>
  );
}
