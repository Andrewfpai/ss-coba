import { createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const config= {
  projectId: "62ypl7jk",
  dataset: "production",
  apiVersion: "2024-07-05",
  useCdn: false,
};

const client = createClient(config);

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}


export async function sanityFetch({ query, qParams = {}, tags }) {
  return client.fetch(query, qParams, {
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
    next: { tags },
  });
}

export default client;