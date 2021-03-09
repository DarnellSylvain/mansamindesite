import Image from "next/image";

import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 bottom-0 flex flex-col items-center justify-center text-center relative">
      <div>
        <h1 className="mt-4 text-2xl text-white">Follow us on:</h1>
        <div className="flex w-content justify-between my-6 text-3xl text-white">
          <a
            href="https://www.youtube.com/channel/UCtwy_rjEevFjUsFaH2P2dPQ"
            target="_blank"
            alt="Youtube"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a
            href="https://twitter.com/mansa_mind"
            target="_blank"
            alt="Twitter"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.instagram.com/mansaminds/"
            target="_blank"
            alt="Instagram"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="bg-white w-max border rounded-full p-2 absolute hidden right-0 bottom-0 mr-4 md:flex">
        <Image src="/mansamindlogo.png" alt="logo" width="68" height="68" />
      </div>
      <p className="text-white">&copy; Mansamind</p>
    </footer>
  );
};

export default Footer;
