export default {
  name: "resume",
  title: "Resume Information",
  type: "document",
  fields: [
    {
      name: "user",
      title: "User",
      type: "reference",
      to: { type: "user" },
    },
    {
      name: "workhistory",
      title: "Work History",
      type: "array",
      of: [{ type: "reference", to: { type: "workHistory" }}],
    },
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "education" }],
    },
    {
      name: "additionalTrainings",
      title: "Additional Training - General knoledge",
      type: "array",
      of: [{ type: "additionalTrainings" }],
    },
  ],
};
