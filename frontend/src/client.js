import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "dz009swe",
  dataset: "production",
  apiVersion: "2023-09-08",
  useCdn: true,
  token:
    "sk5xvNAOBSC57PUsTUrn1z4JTAbUEAeW36xPs1Wkhgq6dwgsX7Z9lsrIg3lSGstVMs2kAhyDd7txN1S0B4S63xBDywoLgrlUuM1kRs5YDHaqGRclUaeOzLM5ZhCDThKSncBkSgxLPOTVHXrj6AP8KvQx3vkeqcklOuPe4Pgw72wuSeKTt9MP",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
