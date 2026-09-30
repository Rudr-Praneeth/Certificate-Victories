export const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const titleFromSlug = (slug) =>
  slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

export const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const audiences = ["For Individuals", "For Businesses", "For Universities", "For Governments"];

export const exploreColumns = [
  [
    {
      title: "Explore roles",
      items: ["Data Analyst", "Project Manager", "Cyber Security Analyst", "Data Scientist", "Business Intelligence Analyst", "Digital Marketing Specialist", "UI / UX Designer", "Machine Learning Engineer", "Social Media Specialist", "Computer Support Specialist"],
      viewAll: "Data Analyst",
    },
  ],
  [
    {
      title: "Explore categories",
      items: ["Artificial Intelligence", "Business", "Data Science", "Information Technology", "Computer Science", "Healthcare", "Physical Science and Engineering", "Personal Development", "Social Sciences", "Language Learning", "Arts and Humanities"],
      viewAll: "Artificial Intelligence",
    },
  ],
  [
    {
      title: "Earn a Professional Certificate",
      items: ["Business", "Computer Science", "Data Science", "Information Technology"],
      viewAll: "Professional Certificates",
    },
    {
      title: "Earn an online degree",
      items: ["Bachelor's Degrees", "Master's Degrees", "University Certificates"],
      viewAll: "Online Degrees",
    },
  ],
  [
    {
      title: "Explore trending skills",
      items: ["Python", "Artificial Intelligence", "Excel", "Machine Learning", "SQL", "Project Management", "Power BI", "Marketing"],
    },
    {
      title: "Prepare for a certification exam",
      items: [],
      viewAll: "Certification Exams",
    },
  ],
];

export const heroSlides = [
  {
    id: "ai",
    theme: "dark",
    title: "Learn AI from the companies building it",
    text: "Courses and certificates from Google, OpenAI, Anthropic, and IBM  - for every level and role.",
    cta: "Explore AI courses",
    to: "/careers/artificial-intelligence",
    image: img("ai-learner", 520, 560),
  },
  {
    id: "microsoft",
    theme: "peach",
    brand: "Microsoft",
    title: "Navigate your career path in tech with Microsoft",
    text: "Choose the skills that lead to today's most in-demand tech roles with more than 15 all-new courses from Microsoft.",
    cta: "Enroll now",
    to: "/careers/machine-learning-engineer",
    image: img("ms-career", 440, 480),
  },
  {
    id: "google",
    theme: "light",
    brand: "Google",
    title: "Earn a Google Career Certificate",
    text: "Get job-ready skills in data, design, cybersecurity and more, with no experience required.",
    cta: "Explore certificates",
    to: "/careers/data-analyst",
    image: img("google-cert", 440, 480),
  },
];

export const popularColumns = [
  {
    title: "Most popular",
    to: "/careers/data-analyst",
    items: [
      { org: "Google", title: "Google Data Analytics", type: "Professional Certificate", rating: "4.8", seed: "gda" },
      { org: "Google", title: "Foundations: Data, Data, Everywhere", type: "Course", rating: "4.8", seed: "gfd" },
      { org: "IBM", title: "IBM Data Science", type: "Professional Certificate", rating: "4.6", seed: "ibmds" },
    ],
  },
  {
    title: "Hot new releases",
    to: "/careers/artificial-intelligence",
    items: [
      { org: "Dr. Ryan Ahmed", title: "The Complete Claude Code & Claude Cowork Masterclass", type: "Specialization", seed: "claudecode" },
      { org: "Amazon Web Services", title: "AWS Security Engineer Advanced", type: "Professional Certificate", seed: "awssec" },
      { org: "Microsoft", title: "Microsoft AI Engineer", type: "Professional Certificate", seed: "msai" },
    ],
  },
  {
    title: "Trending AI courses",
    to: "/careers/machine-learning-engineer",
    items: [
      { org: "Amazon Web Services", title: "AWS Generative AI Developer Advanced", type: "Professional Certificate", seed: "awsgen" },
      { org: "Multiple educators", title: "Machine Learning", type: "Specialization", seed: "mlspec" },
      { org: "DeepLearning.AI", title: "Generative AI for Everyone", type: "Course", seed: "genai" },
    ],
  },
];

export const partners = [
  { name: "Google", color: "#ea4335" },
  { name: "IBM", color: "#1f70c1" },
  { name: "Microsoft", color: "#00a4ef" },
  { name: "University of Illinois", color: "#e84a27" },
  { name: "OpenAI", color: "#111111" },
  { name: "Anthropic", color: "#b5653c" },
  { name: "DeepLearning.AI", color: "#f0416c" },
  { name: "Stanford University", color: "#8c1515" },
  { name: "University of Pennsylvania", color: "#011f5b" },
  { name: "University of Michigan", color: "#00274c" },
  { name: "Duke University", color: "#003087" },
  { name: "Meta", color: "#0866ff" },
];

export const fields = {
  "AI Engineer": ["Generative AI Engineering with LLMs", "Introduction to Machine Learning", "Deep Learning", "Machine Learning Specialization"],
  "Software Developer": ["Meta Full-Stack Developer", "Python for Everybody", "Google Android Development", "Advanced React"],
  "Data Analyst": ["Google Data Analytics", "IBM Data Analyst", "Excel Skills for Business", "SQL for Data Science"],
  "Project Manager": ["Google Project Management", "Agile Project Management", "AI for Project Managers", "PMP Exam Prep"],
  "Business Leader": ["AI for Business Leaders", "Strategic Leadership", "Financial Markets", "Digital Transformation"],
  "Digital Marketer": ["Google Digital Marketing", "Social Media Marketing", "AI for Marketing", "Content Strategy"],
};

export const footerTop = [
  { title: "Skills", items: ["Accounting", "Artificial Intelligence (AI)", "Cybersecurity", "Data Analytics", "Digital Marketing", "Human Resources (HR)", "Microsoft Excel", "Project Management", "Python", "SQL"] },
  { title: "Professional Certificates", items: ["Google AI Certificate", "Google Cybersecurity Certificate", "Google Data Analytics Certificate", "Google IT Support Certificate", "Google Project Management Certificate", "Google UX Design Certificate", "IBM AI Engineering Certificate", "IBM AI Product Manager Certificate", "IBM Data Science Certificate", "Intuit Academy Bookkeeping Certificate"] },
  { title: "Courses & Specializations", items: ["AI Essentials Specialization", "AI For Business Specialization", "AI For Everyone Course", "AI in Healthcare Specialization", "Deep Learning Specialization", "Excel Skills for Business Specialization", "Financial Markets Course", "Machine Learning Specialization", "Prompt Engineering for ChatGPT Course", "Python for Everybody Specialization"] },
  { title: "Career Resources", items: ["Career Aptitude Test", "CAPM Certification Requirements", "CompTIA A+ Certification Requirements", "CompTIA Security+ Certification Requirements", "Essential IT Certifications", "High-Income Skills to Learn", "How to Learn Artificial Intelligence", "PMP Certification Requirements", "Popular Cybersecurity Certifications", "Share your Coursera learning story"] },
];

export const footerBottom = [
  { title: "Coursera", items: ["About", "What We Offer", "Leadership", "Careers", "Catalog", "Coursera Plus", "Professional Certificates", "MasterTrack® Certificates", "Degrees", "For Enterprise", "For Government", "For Campus", "Become a Partner", "Social Impact", "Free Courses", "ECTS Credit Recommendations"] },
  { title: "Community", items: ["Learners", "Partners", "Beta Testers", "Blog", "The Coursera Podcast", "Tech Blog", "Teaching Center"] },
  { title: "More", items: ["Press", "Investors", "Terms", "Privacy", "Help", "Accessibility", "Contact", "Articles", "Directory", "Affiliates", "Modern Slavery Statement", "Manage Cookie Preferences"] },
];

const roleDetails = {
  "data-analyst": {
    pitch: "If you like analyzing data to find insights, creating reports and visualizations, and working with spreadsheets and databases this role is for you.",
    desc: "A Data Analyst collects, cleans, and interprets data to provide actionable insights. They use tools like Excel, SQL, and Tableau to analyze trends and help businesses make data-driven decisions.",
    skills: "Data Analysis, SQL, Python Programming, Data Visualization, Microsoft Excel, Statistics, Problem Solving, Data Quality",
    salary: 300477.97,
    jobs: 56733,
    cert: "IBM Data Analyst Professional Certificate",
    org: "IBM",
    courses: ["Introduction to Data Analytics", "Excel Basics for Data Analysis", "Data Visualization and Dashboards with Excel and Cognos", "Python for Data Science, AI & Development", "Python Project for Data Science", "Databases and SQL for Data Science"],
  },
};

export const getCareer = (slug) => {
  const title = titleFromSlug(slug);
  const known = roleDetails[slug];
  const base = known || {
    pitch: `If you enjoy solving problems and building expertise, a career in ${title} could be a great fit for you.`,
    desc: `Professionals in ${title} apply practical skills and modern tools to deliver results, collaborate with teams, and grow into senior roles across industries.`,
    skills: `${title}, Problem Solving, Communication, Critical Thinking, Collaboration, Tools and Workflows, Project Delivery, Continuous Learning`,
    salary: 240000 + ((slug.length * 9137.31) % 160000),
    jobs: 12000 + ((slug.length * 3571) % 40000),
    cert: `${title} Professional Certificate`,
    org: "Google",
    courses: [`Introduction to ${title}`, `${title} Foundations`, "Tools and Techniques", "Hands-On Projects", "Working with Data", "Capstone Project"],
  };
  const levels = {
    Beginner: { title: base.cert, org: base.org, duration: "4 months", reviews: 99689, rating: 4.6, courses: base.courses },
    Intermediate: { title: `${title} Specialization`, org: "University of Michigan", duration: "3 months", reviews: 24310, rating: 4.7, courses: base.courses.slice().reverse() },
    Advanced: { title: `Advanced ${title} Professional Certificate`, org: "Microsoft", duration: "6 months", reviews: 8420, rating: 4.8, courses: base.courses.map((c) => `Advanced ${c}`) },
  };
  return { slug, title, image: img(`career-${slug}`, 560, 700), ...base, levels };
};
