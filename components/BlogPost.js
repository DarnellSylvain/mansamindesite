import Link from "next/link";

const BlogPost = ({ title, img, tag }) => {
  return (
    <div id="card" className="rounded-lg shadow-lg overflow-hidden pb-2 mb-4">
      <div>
        <img className="h-96 w-full object-cover" src={img} alt=""></img>
      </div>

      <div className="p-4 pt-5">
        <p className="text-base leading-5 text-text_color">{tag}</p>
        <Link href="/">
          <a>
            <h3 className="font-medium text-2xl text-heading_color mt-3.5">
              {title}
            </h3>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
