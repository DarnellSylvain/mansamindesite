import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

import { FaBars, FaTimes } from "react-icons/fa";

const Container = ({ children, ...customMeta }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const meta = {
    title: "Mansamind",
    description: "Mansamind website containing blog",
    ...customMeta,
  };
  return (
    <div className="container m-auto p-0 overflow-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
        <meta name="robots" content="follow, index" />
      </Head>
      <nav className="container text-heading_color flex flex-wrap items-center justify-between max-w-6xl m-auto p-2 sm:p-8">
        <div className="w-full relative flex justify-between sm:w-auto sm:static sm:block sm:justify-start">
          <div>
            <Image src="/mansamindlogo.png" alt="logo" width="38" height="38" />
          </div>
          <button
            type="button"
            className="sm:hidden text-2xl cursor-pointer outline-none focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
            name="Navigation button"
            aria-label="toggle Nav"
          >
            {navbarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={
            "sm:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col sm:flex-row list-none sm:ml-auto mt-4 sm:mt-0">
            <li>
              <Link href="/">
                <a className="pl-8 sm:pl-0 mb-2 sm:mb-0">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <a className="pl-8 pb-2 sm:pb-0">Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/bookclub">
                <a className="pl-8 pb-2 sm:pb-0">Bookclub</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="pl-8 pb-2 sm:pb-0">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
      <Footer />
    </div>
  );
};

export default Container;
