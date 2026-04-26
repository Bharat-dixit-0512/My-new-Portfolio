import React from 'react';
import { NavLink } from 'react-router-dom';
import InterestCards from './InterestCards';
import {personalInfo} from '../data/portfolioData.js';

const Home = () => {
  return (
    <section className="min-h-screen fade-in flex flex-col items-center justify-center px-6 py-10 sm:bg-black md:bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="flex mt-40  flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-28 max-w-7xl w-full">
        <div className="text-white text-center md:text-left space-y-6 max-w-xl">
          <h1 className="text-5xl font-Exo md:text-6xl font-extrabold leading-tight hover:scale-105 transition-transform duration-300">
            Hello
          </h1>
          <h2 className="text-4xl md:text-4xl font-semibold">
            I'm <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_25px_rgba(255,0,0,0.8)]">Bharat Dixit</span>
          </h2>
          <p className="text-lg text-gray-300">
            Passionate Computer Science undergraduate eager to transform ideas into impactful tech solutions. Skilled in crafting innovative, responsive software with an eye for performance and user experience. Continuously evolving through hands-on development and forward-thinking collaboration.
          </p>
          <a
            href="/BharatResume.pdf"
            download
            className="relative inline-block px-6 py-3 mt-4 font-semibold text-white rounded-md bg-gradient-to-r from-red-500 to-red-700 overflow-hidden group transition-all duration-700 ease-in-out hover:scale-105 shadow-lg hover:shadow-[0_0_15px_rgba(255,50,90,0.8)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-400 via-pink-500 to-red-600 opacity-20 blur-xl animate-[spin_8s_linear_infinite]"></span>
            <span className="relative z-10 group-hover:tracking-wide transition-all duration-500 ease-in-out">
              Download Resume
            </span>
          </a>
        </div>

        <div className="neon-image-wrapper w-32 sm:w-40 md:w-52 lg:w-60 xl:w-64 h-32 sm:h-40 md:h-52 lg:h-60 xl:h-64 my-5">
          <img
            src={personalInfo.profileImage}
            alt="Bharat Dixit"
            className="w-full h-full object-cover object-top rounded-full"
          />
        </div>
      </div>

      <div className="mt-50 min-h-screen fade-in text-white w-full max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-4 uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">My Coding Statistics</h1>
        <h2 className='text-3xl font-bold text-center mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'>DSA Platform</h2>

        <div className="flex justify-center items-center gap-10 mt-8 mb-10">
          <a
            href="https://leetcode.com/u/BharatDixit0512/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-white text-xl font-semibold bg-gradient-to-r from-yellow-500 to-orange-600 rounded-md shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,170,0,0.8)]"
          >
            LeetCode
          </a>
          <a
            href="https://github.com/Bharat-dixit-0512"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-white text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(150,100,255,0.8)]"
          >
            GitHub
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-pink-500 text-center">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <p className="text-3xl font-bold text-pink-400">-</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-red-500 text-center">
            <h2 className="text-xl font-semibold mb-2">Languages</h2>
            <p className="text-3xl font-bold text-red-400">Java, HTML, React, JS, Nodejs, CSS</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-indigo-500 text-center">
            <h2 className="text-xl font-semibold mb-2">GitHub Commits</h2>
            <p className="text-3xl font-bold text-indigo-400">400+</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-yellow-500 text-center">
            <h2 className="text-xl font-semibold mb-2">Hours Coding/Day</h2>
            <p className="text-3xl font-bold text-yellow-400">10+</p>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-center mb-10 mt-25 uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Interest & Hobbies</h1>
        <InterestCards />

        <div className="flex justify-center items-center mt-8">
          <NavLink
            to="/Contact"
            className="px-10 py-3 text-white text-xl font-semibold rounded-md bg-gradient-to-r from-red-500 to-red-700 shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_12px_rgba(255,0,60,0.6)]"
          >
            Contact Me
          </NavLink>
        </div>
      </div>

    </section>
  );
};

export default Home;