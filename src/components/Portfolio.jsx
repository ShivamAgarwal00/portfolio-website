import React from "react";
import cryptohunter from "../assets/portfolio/cryptohunter.png";
import drummkit from "../assets/portfolio/drummkit.png";
import allusersafteraadding from "../assets/portfolio/all users after adding.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import publish from "../assets/portfolio/publish.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cryptohunter,
      demo: "https://crypto-hunter.netlify.app/",
      code: "https://github.com/ShivamAgarwal00/Crypto-Hunter",
    },
    {
      id: 2,
      src: reactParallax,
      demo: "https://github.com/ShivamAgarwal00/E-Commerce-App",
      code: "https://github.com/ShivamAgarwal00/E-Commerce-App",
    },
    {
      id: 3,
      src: allusersafteraadding,
      demo: "https://github.com/ShivamAgarwal00/CRUD-application",
      code: "https://github.com/ShivamAgarwal00/CRUD-application",
    },
    {
      id: 4,
      src: reactSmooth,
      demo: "https://github.com/ShivamAgarwal00/crypto-steno-graphy",
      code: "https://github.com/ShivamAgarwal00/crypto-steno-graphy",
    },
    {
      id: 5,
      src: drummkit,
      demo: "https://drumm-kiit.netlify.app/",
      code: "https://github.com/ShivamAgarwal00/Drum-Kit",
    },
    {
      id: 6,
      src: publish,
      demo: "https://github.com/ShivamAgarwal00/Blog-website",
      code: "https://github.com/ShivamAgarwal00/Blog-website",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4   mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-16">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href = {demo}> Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href = {code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;