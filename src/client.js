import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "59i0y8t8",
  dataset: "production",
  useCdn: true
})