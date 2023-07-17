import { defineType } from "sanity";

export default defineType({
  name: "stacks",
  title: "Stacks",
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
    },
    {
      name: "courses",
      title: "Courses",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "course",
              title: "Course",
              type: "reference",
              to: [{ type: "course" }],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
});
