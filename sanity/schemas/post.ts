import { defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              { name: "color", title: "Color", type: "color" },
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
        { type: "imageBlock" }, // Custom block for images
        { type: "codeBlock" }, // Custom block for code text
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    // Add any other desired post properties below
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: [{ type: 'author' }],
    // },
  ],
});