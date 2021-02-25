import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import PopularPostCard from "@/components/PopularPostCard";
import BlogPost from "@/components/BlogPost";
import BookCarousel from "@/components/BookCarousel";

import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import styles from "@/styles/carousel.module.scss";

const URL = `https://www.googleapis.com/youtube/v3/playlistItems`;

// Get Props for the homepage
export async function getStaticProps() {
  const res = await fetch(
    `${URL}?part=snippet&playlistId=UU_JxE9KiFhLdZa4kIYfqAUg&maxResults=20&rel=0&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

// Index Page
export default function Home({ data }) {
  // State
  const [selectedVid, setSelectedVid] = useState(
    data.items[0].snippet.resourceId.videoId
  );

  const [navbarOpen, setNavbarOpen] = useState(false);

  // Handles
  const handleSelectedVid = (id) => {
    setSelectedVid(id);
  };

  return (
    <div className="container m-auto p-0 overflow-hidden">
      <Head>
        <title>MansaMind</title>
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

      <div className="flex bg-gray-900 h-52 m-auto">
        <h1 className="w-max text-white self-center m-auto text-5xl ">
          MansaMind
        </h1>
      </div>

      <BookCarousel />
      {/* Book Recommendations carousal  */}

      <div className="container max-w-5xl mx-auto my-8 p-2">
        <h3 className="text-lg mb-4">Latest Post</h3>

        <div className="grid md:grid-cols-12 gap-4   ">
          <main className="md:col-start-1 md:col-end-9">
            <BlogPost
              title="WandaVision - How Marvel Reinvented Their Formula"
              img="https://i.imgur.com/qYrLj3J.jpg"
              tag="Media"
            />
            <BlogPost
              title="The best advice I ever got was to just make things happen"
              img="https://i.imgur.com/CVOJRoi.jpg"
              tag="Technology"
            />
            <BlogPost
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries
              "
              img="https://i.imgur.com/W7Sgr1E.jpg"
              tag="Web Development"
            />
          </main>

          <aside className="md:col-start-9 md:col-end-13" id="aside">
            <div className="relative p-0 overflow-hidden ">
              <Image
                src="/currentbook.png"
                alt="current read"
                width="630"
                height="400"
                className="rounded-lg w-full object-fill"
              />

              <div className="rounded-lg rounded-t-2xl -mt-1.5 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-black opacity-70 w-full h-full"></div>
              <h2 className="py-4 text-center text-2xl absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-full  text-white">
                Current Book Read
              </h2>
            </div>
            <div>
              <h3 className="mt-8 mb-4 text-xl font-medium text-center text-heading_color">
                Reconquer your mind
              </h3>
              <p className="text-text_color mb-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
              </p>
              <h3 className="mt-8 mb-4 text-xl font-medium text-center text-heading_color">
                Popular Post
              </h3>
              <div className="flex flex-col">
                <PopularPostCard
                  title="How Stripe Designs Beautiful Websites"
                  tag="Web Design"
                />
                <PopularPostCard
                  title="How To Use A Journal Effectively"
                  tag="Personal Development"
                />
                <PopularPostCard
                  title="Star Wars Battlefront 2 - General Grievous is a MONSTER - 54 Killstreak"
                  tag="Gaming"
                />
                <PopularPostCard
                  title="WANDA IS CRAZY! - WandaVision Episode 4 - REACTION/REVIEW"
                  tag="Review"
                />
              </div>

              <div className="shadow-md w-full p-8 items-center flex flex-col border border-gray-200">
                <h1 className="text-2xl text-heading_color font-medium text-center mb-4">
                  JOIN THE MAILING LIST
                </h1>
                <p className="text-center text-text_color mb-8">
                  Join our exclusive newsletter to receive the latest
                  information and offers
                </p>
                <button className="bg-heading_color text-white px-8 py-2 text-xl">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </aside>
        </div>

        <div className="w-full bg-gray-900 p-3 mt-4 mb-2">
          <h2 className="text-lg text-white">Latest Videos</h2>
          <div className="grid lg:grid-cols-12 gap-3.5 border-t pt-3.5 ">
            <div className="lg:col-start-1 lg:col-end-9 border-b pb-2 lg:border-0">
              <div
                id="YTvid"
                className="w-full mb-2 object-fill h-0 relative videoWrapper"
              >
                <iframe
                  width="1280"
                  height="720"
                  src={`https://www.youtube.com/embed/${selectedVid}?modestbranding=1&iv_load_policy=3`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div></div>
            </div>

            <div className="lg:col-start-9 lg:col-end-13 lg:border-l md:pl-3.5 flex flex-col max-h-yt overflow-y-auto overscroll-auto scrollbar">
              {data.items.map((item) => {
                const { id, snippet = {} } = item;
                const { title, thumbnails = {}, resourceId = {} } = snippet;
                const { videoId } = resourceId;
                const { medium = {} } = thumbnails;

                return (
                  <div
                    key={item.id}
                    className="text_text_color w-full mb-2"
                    onClick={() => handleSelectedVid(videoId)}
                  >
                    <Link href="/#YTvid">
                      <a>
                        <div className="flex items-center">
                          <img
                            className="w-28 object-cover mb-2 mr-2"
                            src={medium.url}
                            alt=""
                          ></img>

                          <div>
                            <h3 className="text-sm text-white">{title}</h3>
                          </div>
                        </div>
                      </a>
                    </Link>{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 bottom-0 flex flex-col items-center justify-center text-center relative">
        <div>
          <h1 className="mt-4 text-2xl text-white">Follow us on:</h1>
          <div className="flex w-content justify-between my-6 text-3xl text-white">
            <a
              href="https://www.youtube.com/channel/UCtwy_rjEevFjUsFaH2P2dPQ"
              target="_blank"
            >
              <FaYoutube />
            </a>

            <a href="https://twitter.com/mansa_mind" target="_blank">
              <FaTwitter />
            </a>

            <a href="https://www.instagram.com/mansaminds/" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="bg-white w-max border rounded-full p-2 absolute hidden right-0 bottom-0 mr-4 md:flex">
          <Image src="/mansamindlogo.png" alt="logo" width="68" height="68" />
        </div>
        <p className="text-white">&copy; Mansamind</p>
      </footer>
    </div>
  );
}
