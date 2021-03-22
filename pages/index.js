import Link from "next/link";
import Image from "next/image";
import client from "@/lib/client";
import groq from "groq";

import urlFor from "@/utils/imageBuilder";

import { useState } from "react";

import PopularPostCard from "@/components/PopularPostCard";
import BlogCard from "@/components/BlogCard";
import BookCarousel from "@/components/BookCarousel";

import Container from "@/components/Container";

const URL = `https://www.googleapis.com/youtube/v3/playlistItems`;

// Get Props for the homepage
export async function getStaticProps() {
  const res = await fetch(
    `${URL}?part=snippet&playlistId=UUtwy_rjEevFjUsFaH2P2dPQ&maxResults=20&rel=0&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();

  const query = groq`*[ _type == "post"]`;
  const posts = await client.fetch(query);

  return {
    props: {
      data,
      posts,
    },

    revalidate: 60,
  };
}

// export async function getStaticPaths() {
//   const { sites } = await getAllSites();
//   const paths = sites.map((site) => ({
//     params: {
//       siteId: site.id.toString(),
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// Index Page
export default function Home({ data, posts }) {
  // State
  const [selectedVid, setSelectedVid] = useState({
    id: data.items[0].snippet.resourceId.videoId,
    title: data.items[0].snippet.title,
    thumbnails: data.items[0].snippet.thumbnails,
  });
  // Handles
  const handleSelectedVid = (id, title, thumbnails) => {
    setSelectedVid({ id, title, thumbnails });
  };

  return (
    <Container>
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
            {posts.map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                img={urlFor(post.mainImage).url()}
                slug={post.slug.current}
                publishedAt={post.publishedAt}
              />
            ))}
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
                  title={selectedVid.title}
                  width="1280"
                  height="720"
                  src={`https://www.youtube.com/embed/${selectedVid.id}?modestbranding=1&iv_load_policy=3`}
                  srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${selectedVid.id}?modestbranding=1&iv_load_policy=3><img src=${selectedVid.thumbnails.standard.url} alt="${selectedVid.title}"><span>▶</span></a>`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
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
                    onClick={() =>
                      handleSelectedVid(videoId, title, thumbnails)
                    }
                  >
                    <Link href="/#YTvid">
                      <a>
                        <div className="flex items-center">
                          <div className="mr-2">
                            <Image
                              src={medium.url}
                              width={256}
                              height={144}
                              layout="intrinsic"
                              alt={title}
                            />
                          </div>

                          <h3 className="text-sm text-white w-full h-16 overflow-hidden">
                            {title}
                          </h3>
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
    </Container>
  );
}
