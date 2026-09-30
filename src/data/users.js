const certFiles = import.meta.glob("./certificates/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export const certificateUrl = (file) =>
  file ? certFiles[`./certificates/${file}`] || "" : "";

const sustainable = {
  id: "sustainable-cities-specialization",
  title: "Sustainable Cities Specialization",
  type: "Specialization",
  org: "Johns Hopkins University",
  badge: { letter: "J", color: "#002d72" },
  completedOn: "July 20, 2026",
  completedLabel: "July 2026",
  hours: "17 hours (approximately)",
  grade: "100%",
  rating: "4.8",
  ratings: "2,316",
  enrolled: "18,420",
};

const autocad = {
  id: "autocad-architectural-design-residential-planning-specialization",
  title: "AutoCAD Architectural Design & Residential Planning Specialization",
  type: "Specialization",
  org: "EDUCBA",
  badge: { letter: "E", color: "#f26522" },
  completedOn: "July 20, 2026",
  completedLabel: "July 2026",
  hours: "24 hours (approximately)",
  grade: "100%",
  rating: "4.8",
  ratings: "77",
  enrolled: "2,598",
};

const learners = {
  "phani.jackfinisher@gmail.com": {
    name: "Phani",
    fullName: "Phani",
    completed: [
      {
        ...sustainable,
        certificate: "Phani-sustainable.jpeg",
        thumbnail: "Phani-sustainable.jpeg",
      },
    ],
  },
  "22031aa009@gmail.com": {
    name: "Bhargavi",
    fullName: "Bhargavi",
    completed: [
      {
        ...autocad,
        certificate: "autocad-1.jpeg",
        thumbnail: "autocad-1.jpeg",
      },
    ],
  },
  "bmaithreyi66@gmail.com": {
    name: "Maithreyi",
    fullName: "Maithreyi",
    completed: [
      {
        ...autocad,
        certificate: "autocad-2.jpeg",
        thumbnail: "autocad-2.jpeg",
      },
    ],
  },
};

export const getLearner = (email) => {
  const known = learners[email.trim().toLowerCase()];
  if (known) return known;
  const raw =
    email
      .split("@")[0]
      .replace(/[^a-zA-Z]+/g, " ")
      .trim() || "Learner";
  const name = raw.charAt(0).toUpperCase() + raw.slice(1);
  return { name, fullName: name, completed: [] };
};
