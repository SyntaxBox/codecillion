import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";
import { colorInput } from "@sanity/color-input";

const config = defineConfig({
  projectId: "efsrq7y0",
  dataset: "production",
  title: "codexpand",
  apiVersion: "2023-07-17",
  basePath: "/admin",
  plugins: [deskTool(), colorInput()],
  schema: { types: schemas },
});

export default config;
