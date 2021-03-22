import Image from "next/image";
import urlFor from "@/utils/imageBuilder";
import BlockContent from "@sanity/block-content-to-react";
import groq from "groq";
import serializers from "@/lib/client";

import { format, parseISO } from "date-fns";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import PopularPostCard from "@/components/PopularPostCard";

import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Container from "@/components/Container";
import Comment from "@/components/Comment";
import BlogCard from "@/components/BlogCard";
import client from "@/lib/client";

export const getStaticProps = async (context) => {
  const { slug = "" } = context.params;
  // const { slug = "" } = context.query;

  const query = groq`*[ _type == "post" && slug.current == "${slug}" ][0]{title, "name": author->name, body, mainImage, "authorImage": author->image, publishedAt}`;

  const post = await client.fetch(query, { slug });

  return {
    revalidate: 60 * 60 * 24,
    props: {
      post,
    },
  };
};

export async function getStaticPaths() {
  const query = groq`*[ _type == "post"]`;
  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

const BlogPost = ({ post }) => {
  const {
    title = "Missing Title",
    name = "Missing Name",
    authorImage,
    mainImage,
    publishedAt,
    body,
  } = post;

  const inputCom = useRef(null);
  const inputName = useRef(null);
  const inputEmail = useRef(null);

  // Handles

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(
      inputCom.current.value,
      inputEmail.current.value,
      inputName.current.value
    );
  };

  return (
    <Container title={`${title} - Mansamind`}>
      <div className="container max-w-5xl mx-auto my-8 p-2">
        <h3 className="text-3xl mb-4 max-w-2xl font-medium">{title}</h3>
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <Image
              src={urlFor(authorImage).url()}
              alt="logo"
              width="40"
              height="40"
              className="rounded-full"
            />
          </div>
          <div>
            <h4>{name}</h4>
            <p className="text-xs">{format(parseISO(publishedAt), "PPP")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-4 ">
          <div className="md:col-start-1 md:col-end-9">
            <main className="text-text_color">
              <Image
                src={urlFor(mainImage).url()}
                width={666}
                height="384"
                layout="intrinsic"
                alt="Current book"
              />
              <div className="prose w-full">
                <BlockContent
                  blocks={body}
                  serializers={serializers}
                  imageOptions={{ w: 666 }}
                  {...client.config()}
                />
              </div>

              <div>
                <div className="flex items-center mt-6">
                  <p className="mr-4 border py-1 px-4">Tag</p>
                  <p className="mr-4 border py-1 px-4">Tag</p>
                  <p className="mr-4 border py-1 px-4">Tag</p>
                  <p className="mr-4 border py-1 px-4">Tag</p>
                </div>
              </div>
            </main>
            <div>
              <h1 className="mt-6 text-xl ">Share on Socials:</h1>
              <div className="flex w-content  my-4 text-3xl ">
                <a
                  href="https://www.youtube.com/channel/UCtwy_rjEevFjUsFaH2P2dPQ"
                  target="_blank"
                  alt="Youtube"
                  className="mr-4"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://twitter.com/mansa_mind"
                  target="_blank"
                  alt="Twitter"
                  className="mr-4"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://www.instagram.com/mansaminds/"
                  target="_blank"
                  alt="Instagram"
                  className="mr-4"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div id="commentForm" className="">
              <h4 className="mb-4">LEAVE A REPLY</h4>
              <small>Required fields are marked *</small>

              <form onSubmit={onSubmit} className="flex flex-col mt-4">
                <label htmlFor="comment" className="text-sm mb-2">
                  Comment*
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  className="border h-18 p-1"
                  rows="4"
                  cols="2"
                  required
                  ref={inputCom}
                ></textarea>
                <label htmlFor="name" className="text-sm mb-2 mt-4">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="border p-1"
                  ref={inputName}
                ></input>
                <label htmlFor="email" className="text-sm mb-2 mt-4">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="border p-1"
                  ref={inputEmail}
                ></input>
                <button
                  type="submit"
                  className="bg-gray-500 mt-4 w-36 text-white border-0 py-2"
                >
                  Post Comment
                </button>
              </form>

              <div id="comments" className="mt-8">
                <h4>Comments</h4>
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
          </div>

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
        <h1 className="mt-6 text-xl mb-4">Suggested Posts:</h1>
        <div className="grid md:grid-cols-12 gap-4">
          <div className="col-span-6">
            <BlogCard
              title="WandaVision - How Marvel Reinvented Their Formula"
              img="https://i.imgur.com/qYrLj3J.jpg"
              tag="Media"
            />
          </div>
          <div className="col-span-6">
            <BlogCard
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries
          "
              img="https://i.imgur.com/W7Sgr1E.jpg"
              tag="Web Development"
            />
          </div>
          <div className="col-span-6">
            <BlogCard
              title="WandaVision - How Marvel Reinvented Their Formula"
              img="https://i.imgur.com/qYrLj3J.jpg"
              tag="Media"
            />
          </div>
          <div className="col-span-6">
            <BlogCard
              title="The best advice I ever got was to just make things happen"
              img="https://i.imgur.com/CVOJRoi.jpg"
              tag="Technology"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogPost;
