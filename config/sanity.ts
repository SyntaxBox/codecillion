import {
  apiVersion,
  basePath,
  dataset,
  plugins,
  projectId,
  schema,
  title,
} from "@/constants/other/sanity";

export const config = {
  projectId,
  dataset,
  title,
  apiVersion,
  basePath,
  plugins,
  schema,
};

export const clientConfig = {
  projectId,
  apiVersion,
  dataset,
  useCdn: true,
};