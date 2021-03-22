import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";

const BlogCard = ({ title, img, tag, slug, publishedAt }) => {
  return (
    <div id="card" className="rounded-lg shadow-lg overflow-hidden pb-2 mb-4">
      <div>
        <Image
          src={img}
          width={666}
          height={384}
          className="rounded"
          layout="intrinsic"
          alt={title}
        />
      </div>

      <div className="p-4 pt-5">
        {/* <p className="text-base leading-5 text-text_color">{tag}</p> */}
        <Link href={`/blog/${slug}`}>
          <a>
            <h3 className="font-medium text-2xl text-heading_color ">
              {title}
            </h3>
          </a>
        </Link>
        <p className="text-sm mt-2">{new Date(publishedAt).toDateString()}</p>
      </div>
    </div>
  );
};

export default BlogCard;
