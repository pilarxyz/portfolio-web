import Layout from "../layout/layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout title="About me">
      <div className="flex flex-grow items-center">
        <div className="w-full">
          <div className="container flex mx-auto justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-center md:text-6xl text-3xl font-bold">
                About <span className="text-gray-500">me</span>
              </h1>
              <div className="container lg:w-3/5 w-11/12 mx-auto mt-4">
                <div className="text-justify space-y-6 text-lg font-medium text-gray-200">
                  <p>
                    Hello there! I'm <strong>Pilar Rangga Saputra</strong>, a budding
                    Computer Science whiz currently honing my skills at Sebelas
                    Maret University. I'm pursuing my passion as a Junior Web
                    Developer, where my creativity and tech-savviness allow me
                    to craft interactive websites that stand out. Staying on top
                    of the latest industry trends is a challenge I eagerly
                    embrace.
                  </p>
                  <p>
                    When I'm not immersed in coding or advancing my studies, I
                    enjoy spending time in the thrilling world of video games
                    and exploring unseen paths in the real world. As someone who
                    is always open to learning and growing, I'm prepared and
                    excited to leave my mark in the digital world. Let's embark
                    on this exciting journey together!
                  </p>
                  <div className="space-y-2">
                    <p>Proficiently wielding the following languages:</p>
                    <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                      <img
                        alt="PHP"
                        src="https://img.shields.io/badge/-PHP-18181b?style=for-the-badge&logo=php&logoColor=ffffff"
                      />
                      <img
                        alt="Python"
                        src="https://img.shields.io/badge/-Python-18181b?style=for-the-badge&logo=python&logoColor=ffffff"
                      />
                      <img
                        alt="SQL"
                        src="https://img.shields.io/badge/-SQL-18181b?style=for-the-badge&logo=postgresql&logoColor=ffffff"
                      />
                      <img
                        alt="Javascript"
                        src="https://img.shields.io/badge/-Javascript-18181b?style=for-the-badge&logo=javascript&logoColor=ffffff"
                      />
                      <img
                        alt="HTML5"
                        src="https://img.shields.io/badge/-HTML5-18181b?style=for-the-badge&logo=html5&logoColor=ffffff"
                      />
                      <img
                        alt="CSS3"
                        src="https://img.shields.io/badge/-CSS3-18181b?style=for-the-badge&logo=css3&logoColor=ffffff"
                      />
                    </div>
                    <p>
                      Proficiently maneuvering these frameworks and libraries:
                    </p>
                    <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                      <img
                        alt="Laravel"
                        src="https://img.shields.io/badge/-Laravel-18181b?style=for-the-badge&logo=laravel&logoColor=ffffff"
                      />
                      <img
                        alt="CodeIgniter"
                        src="https://img.shields.io/badge/-CodeIgniter-18181b?style=for-the-badge&logo=codeigniter&logoColor=ffffff"
                      />
                      <img
                        alt="Tailwind CSS"
                        src="https://img.shields.io/badge/-Tailwind CSS-18181b?style=for-the-badge&logo=tailwindcss&logoColor=ffffff"
                      />
                      <img
                        alt="Bootstrap"
                        src="https://img.shields.io/badge/-Bootstrap-18181b?style=for-the-badge&logo=bootstrap&logoColor=ffffff"
                      />
                      <img
                        alt="Flask"
                        src="https://img.shields.io/badge/-Flask-18181b?style=for-the-badge&logo=flask&logoColor=ffffff"
                      />
                      <img
                        alt="React"
                        src="https://img.shields.io/badge/-React-18181b?style=for-the-badge&logo=react&logoColor=ffffff"
                      />
                      <img
                        alt="Next.js"
                        src="https://img.shields.io/badge/-Next.js-18181b?style=for-the-badge&logo=next.js&logoColor=ffffff"
                      />
                    </div>
                    <p>Unfolding my craft with these miscellaneous tools:</p>
                    <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                      <img
                        alt="Git"
                        src="https://img.shields.io/badge/-Git-18181b?style=for-the-badge&logo=git&logoColor=ffffff"
                      />
                      {/* <img alt="DigitalOcean" src="https://img.shields.io/badge/-DigitalOcean-18181b?style=for-the-badge&logo=digitalocean&logoColor=ffffff" /> */}
                      <img
                        alt="VSCode"
                        src="https://img.shields.io/badge/-VSCode-18181b?style=for-the-badge&logo=visual-studio-code&logoColor=ffffff"
                      />
                      <img
                        alt="Figma"
                        src="https://img.shields.io/badge/-Figma-18181b?style=for-the-badge&logo=figma&logoColor=ffffff"
                      />
                      <img
                        alt="Docker"
                        src="https://img.shields.io/badge/-Docker-18181b?style=for-the-badge&logo=docker&logoColor=ffffff"
                      />
                    </div>
                    {/* <p>
                                        Embarking on an exciting journey to master these skills:
                                        </p>
                                        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                                            <img alt="Go" src="https://img.shields.io/badge/-Go-18181b?style=for-the-badge&logo=go&logoColor=ffffff" />
                                            <img alt="Rust" src="https://img.shields.io/badge/-Rust-18181b?style=for-the-badge&logo=rust&logoColor=ffffff" />
                                            <img alt="Docker" src="https://img.shields.io/badge/-Docker-18181b?style=for-the-badge&logo=docker&logoColor=ffffff" />
                                        </div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
