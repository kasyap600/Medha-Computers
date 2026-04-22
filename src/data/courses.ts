export type Course = {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics?: string[];
  symbol?: string;
  logoSrc?: string;
};

export type Category = {
  id: string;
  title: string;
  emoji: string;
  courses: Course[];
};

export const courseCategories: Category[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    emoji: "🤖",
    courses: [
      {
        id: "ai-program",
        title: "Artificial Intelligence",
        symbol: "🤖",
        duration: "1 month",
        description:
          "Foundations of AI and safe, practical skills—from how machines learn to prompt engineering and ethics.",
        topics: [
          "Introduction to Artificial Intelligence",
          "How Machines Learn",
          "Understanding Computers and Data",
          "Computational Thinking",
          "Introduction to Coding",
          "Introduction to Scratch",
          "AI and Language",
          "Ethics and Safety of AI",
          "Prompt Engineering",
        ],
      },
    ],
  },
  {
    id: "internet",
    title: "Internet & web",
    emoji: "🌐",
    courses: [
      {
        id: "cert-internet",
        title: "Certificate in Internet",
        symbol: "🌐",
        duration: "As per batch",
        description:
          "Internet hardware, software, and everyday skills—browsing, email, and safe online use.",
        topics: [
          "Introduction to Internet Hardware",
          "Internet Software and Techniques",
          "Online Transactions",
          "Chatting",
          "Browsing",
          "Downloading",
          "Uploading",
          "E-Mail",
        ],
      },
      {
        id: "web-dev",
        title: "Web Development",
        logoSrc: "/branding/course-icons/html5.svg",
        duration: "2 months",
        description:
          "Web foundations and client-side skills for real pages and job readiness.",
        topics: ["HTML 5.0", "CSS", "JavaScript", "Practical project work"],
      },
    ],
  },
  {
    id: "short-courses",
    title: "Skill-based short courses",
    emoji: "⚡",
    courses: [
      {
        id: "c-lang",
        title: "C Language",
        logoSrc: "/branding/course-icons/c.svg",
        duration: "1 month",
        description: "Core programming logic and problem solving with C.",
      },
      {
        id: "python",
        title: "Python",
        logoSrc: "/branding/python-logo-only.svg",
        duration: "1 month",
        description: "Python basics through scripts, data tasks, and next-step readiness.",
      },
      {
        id: "core-java-7",
        title: "Java",
        logoSrc: "/branding/course-icons/java.svg",
        duration: "2 months",
        description: "OOP, core concepts, and practice toward desktop and interview style tasks.",
      },
      {
        id: "oracle-10g",
        title: "Oracle 10g",
        logoSrc: "/branding/course-icons/oracle.svg",
        duration: "1 month",
        description: "SQL, PL/SQL foundations, and hands-on database practice.",
      },
      {
        id: "tally-prime",
        title: "Tally Prime",
        symbol: "📊",
        duration: "1 month",
        description: "Accountancy, GST-oriented practice, and office-ready Tally skills.",
      },
    ],
  },
  {
    id: "programming-diplomas",
    title: "Programming diplomas",
    emoji: "💻",
    courses: [
      {
        id: "dpl",
        title: "Diploma in Programming Languages (D.P.L)",
        duration: "As per module",
        description: "A focused diploma covering three core programming languages in depth.",
        topics: ["C", "Python", "Core Java 7"],
      },
      {
        id: "dpl-dbms",
        title: "Diploma in Programming Languages & DBMS",
        duration: "As per module",
        description: "Programming plus database skills for data-aware applications.",
        topics: ["C", "Core Java 7", "Oracle 10g"],
      },
    ],
  },
  {
    id: "diploma-streams",
    title: "Diploma & advanced programs",
    emoji: "🏢",
    courses: [
      {
        id: "dmo",
        title: "I. Diploma in MS Office (DMO)",
        duration: "As per module",
        description: "MS Office and internet essentials for school, office, and daily work.",
        topics: [
          "Introductory Concepts",
          "MS Word",
          "MS PowerPoint",
          "MS Excel",
          "Internet",
        ],
      },
      {
        id: "doa",
        title: "II. Diploma in Office Automation (DOA)",
        duration: "As per module",
        description: "DMO level plus access, typing, and file management for automation roles.",
        topics: [
          "DMO Topics",
          "MS Access",
          "Telugu Typing",
          "File Management",
          "Speed Typing",
        ],
      },
      {
        id: "dca",
        title: "III. Diploma in Computer Applications (DCA)",
        duration: "As per module",
        description: "Broad DCA path with access and HTML for applications and the web.",
        topics: [
          "Introductory Concepts",
          "DMO Topics",
          "MS Access",
          "HTML 5.0 (Part I & Part II)",
        ],
      },
      {
        id: "pgdca",
        title: "IV. PG Diploma in Computer Applications (PGDCA)",
        duration: "As per module",
        description: "Post-graduate track building on DCA with database and front-end web skills.",
        topics: [
          "DCA Topics",
          "Oracle 10g",
          "CSS",
          "JavaScript",
        ],
      },
      {
        id: "pgdoa",
        title: "V. PG Diploma in Office Automation (PGDOA)",
        duration: "As per module",
        description: "DOA level plus Tally, printing, scanning, and job-related office tasks.",
        topics: [
          "Introduction",
          "DOA Topics",
          "Tally Prime",
          "Job Works",
          "Printing",
          "Speed Typing",
          "Scanning",
        ],
      },
      {
        id: "softech",
        title: "VI. Softech",
        duration: "As per module",
        description:
          "Comprehensive program spanning office, languages, web, database, Tally, typing, and AI.",
        topics: [
          "MS Word, Excel, PowerPoint",
          "Internet",
          "Languages: C, Python, Java",
          "Database: Oracle 10g",
          "Web Designing: HTML5, CSS, JavaScript",
          "Accountancy Package: Tally Prime",
          "Telugu Typing",
          "Job Works, Speed Typing, Printing",
          "Artificial Intelligence",
        ],
      },
    ],
  },
];

/** All programs in a single list (category groupings in `courseCategories` are for admin/data only). */
export const allCourses: Course[] = courseCategories.flatMap((c) => c.courses);
