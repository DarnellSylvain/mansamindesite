import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-16">
      <Head>
        <title>MansaMind</title>
      </Head>
      <header className="text-heading_color flex items-center justify-between max-w-6xl m-auto p-8">
        <div>
          <Image src="/mansamindlogo.png" alt="logo" width="38" height="38" />
        </div>

        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/dashboard">
            <a className="pl-8">Dashboard</a>
          </Link>
          <Link href="/bookclub">
            <a className="pl-8">Bookclub</a>
          </Link>
          <Link href="/blog">
            <a className="pl-8">Blog</a>
          </Link>
        </div>
      </header>

      <div
        className="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'
      >
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
      </div>

      <div className="flex w-full bg-gray-900 h-52">
        <h1 className="w-max text-white self-center m-auto text-5xl">
          MansaMind
        </h1>
      </div>

      {/* Book Recommendations carousal  */}

      <div className="container max-w-5xl  mx-auto my-8 ">
        <h3 className="text-lg mb-4">Latest Post</h3>

        <div className="grid grid-cols-12 gap-4">
          <main className="col-start-1 col-end-9">
            <div
              id="card"
              className="rounded-lg shadow-lg overflow-hidden pb-2 mb-4"
            >
              <div>
                <img
                  className="h-96 w-full object-cover"
                  src="https://i.imgur.com/qYrLj3J.jpg"
                  alt=""
                ></img>
              </div>

              <div className="p-4">
                <p className="text-base leading-5 text-text_color">Blog</p>
                <h3 className="font-medium text-2xl text-heading mt-4">
                  The best advice I ever got was to just make things happen
                </h3>
              </div>
            </div>

            <div
              id="card"
              className="rounded-lg shadow-lg overflow-hidden pb-2 mb-4"
            >
              <div>
                <img
                  className="h-96 w-full object-cover"
                  src="https://i.imgur.com/CVOJRoi.jpg"
                  alt=""
                ></img>
              </div>

              <div className="p-4">
                <p className="text-base leading-5 text-text_color">Blog</p>
                <h3 className="font-medium text-2xl text-heading mt-4">
                  The best advice I ever got was to just make things happen
                </h3>
              </div>
            </div>

            <div
              id="card"
              className="rounded-lg shadow-lg overflow-hidden pb-2 mb-4"
            >
              <div>
                <img
                  className="h-96 w-full object-cover"
                  src="https://i.imgur.com/W7Sgr1E.jpg"
                  alt=""
                ></img>
              </div>

              <div className="p-4">
                <p className="text-base leading-5 text-text_color">Blog</p>
                <h3 className="font-medium text-2xl text-heading mt-4">
                  The best advice I ever got was to just make things happen
                </h3>
              </div>
            </div>
          </main>

          <aside className="col-start-9 col-end-13" id="aside">
            <div className="relative p-0 overflow-hidden ">
              <Image
                src="/currentbook.png"
                alt="current read"
                width="330"
                height="200"
                className="rounded-lg rounded-t-"
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
                <div className="text_text_color border border-gray-200 w-full p-3.5 rounded-lg mb-4">
                  <p className="text-text_color text-sm mb-1.5">Technology</p>
                  <h3 className="text-lg text-heading_color font-medium">
                    The best advice I ever got was to just make things happen
                  </h3>
                </div>
                <div className="text_text_color border border-gray-200 w-full p-3.5 rounded-lg mb-4">
                  <p className="text-text_color text-sm mb-1.5">Technology</p>
                  <h3 className="text-lg text-heading_color font-medium">
                    The best advice I ever got was to just make things happen
                  </h3>
                </div>
                <div className="text_text_color border border-gray-200 w-full p-3.5 rounded-lg mb-4">
                  <p className="text-text_color text-sm mb-1.5">Technology</p>
                  <h3 className="text-lg text-heading_color font-medium">
                    The best advice I ever got was to just make things happen
                  </h3>
                </div>
                <div className="text_text_color border border-gray-200 w-full p-3.5 rounded-lg mb-4">
                  <p className="text-text_color text-sm mb-1.5">Technology</p>
                  <h3 className="text-lg text-heading_color font-medium">
                    The best advice I ever got was to just make things happen
                  </h3>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
