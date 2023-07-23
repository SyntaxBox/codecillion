import { defineType } from "sanity";

export default defineType({
  name: "course",
  title: "Courses",
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
      name: "featured",
      title: "Featured",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lessons",
      title: "Lessons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "lesson",
              title: "Lesson",
              type: "reference",
              to: [{ type: "lesson" }],
            },
          ],
        },
      ],
    },
  ],
});
