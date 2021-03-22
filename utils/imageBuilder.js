import imageUrlBuilder from "@sanity/image-url";
import client from "@/lib/client";

export default function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
