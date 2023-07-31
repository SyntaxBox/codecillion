export * from "./courses";
export * from "./posts";
export * from "./stacks";
import { createClient } from "next-sanity";
import { clientConfig } from "@/config/sanity.client";
export const client = createClient(clientConfig);
