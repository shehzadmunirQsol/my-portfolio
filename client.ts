import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "tubr46jz",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skJTy669RJBjnAFUuWh6LiiEEYUW9JuvLmfsqX5Xiaw680tDeQ9IpL8XwI2MpdNNHK7vrRXo9RINYswJJWnDoNtJBTRN97yFIf0jV2VFOFOVMFYnop2NcRYu0gxyrRBR5ktKDb08wvxtHGUc8EqMmTkVuR52rs6LjNjqh8HkHxpk8EKSNVxK",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source) as any;
