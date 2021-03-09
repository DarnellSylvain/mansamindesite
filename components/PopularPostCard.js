import Link from "next/link";

const PopularPostCard = ({ title, tag }) => {
  return (
    <div className="text_text_color border border-gray-200 w-full p-3.5 py-5 rounded-lg mb-4">
      <Link href="/blog/popularpost">
        <a>
          <p className="text-text_color text-sm mb-1.5">{tag}</p>
          <h3 className="text-lg text-text_color font-medium">{title}</h3>
        </a>
      </Link>
    </div>
  );
};

export default PopularPostCard;
