import Image from "next/image";

const Comment = () => {
  return (
    <div id="comment" className="mt-4">
      <div className="flex items-center">
        <div id="image" className="mr-4 w-48 md:w-24">
          <Image
            src="/selfie.jpg"
            alt="logo"
            width="100"
            height="100"
            className="rounded-full"
          />
        </div>
        <div id="info">
          <div id="name/date" className="flex items-center font-light">
            <p className="mr-6 font-medium">Darnell Sylvain</p>
            <small className="text-xs">12/03/2020</small>
          </div>

          <p className="text-text_color">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod, sadipscing elitr, sed diam nonumy eirmod.
          </p>
          <small className="text-xs font-light">Reply</small>
        </div>
      </div>
    </div>
  );
};

export default Comment;
