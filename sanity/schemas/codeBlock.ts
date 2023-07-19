import { defineType } from "sanity";

export default defineType({
  name: "codeBlock",
  title: "Code",
  type: "object",
  fields: [
    {
      name: "code",
      title: "Code",
      type: "text",
      rows: 10,
      description: "Enter your code here",
    },
    {
      name: "language",
      title: "Language",
      type: "string",
      description:
        "Specify the programming language (e.g., JavaScript, Python)",
    },
  ],
});
