import { createClient} from "@sanity/client";

const config= {
  projectId: "62ypl7jk",
  dataset: "production",
  apiVersion: "2024-07-05",
  useCdn: false,
};

const client = createClient(config);

export default client;