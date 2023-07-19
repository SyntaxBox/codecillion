import { defineType } from "sanity";

export default defineType({
  name: "imageBlock",
  title: "Image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Alternative text for the image",
    },
  ],
});
