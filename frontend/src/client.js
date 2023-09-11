import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "tx80gfuu",
  dataset: "production",
  apiVersion: "2023-09-12",
  useCdn: true,
  token:
    "skweyUtpjdRzeQBG5If1Ntm5DcwdTNxcTSQIOB0EJWi5dEEhGNRE8dVQsOB8ivj5PfBUxrwM2r1YJYBFAN9WHF9yODEkAUPTwrZfAULjAOU9FBp5HEREZpK2MrlYTyymdY00PbdmlMy9fHpyca8RgFd72UWy2t5CciUEv4NblqAV3nDgMbub",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
