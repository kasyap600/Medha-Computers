export type Course = {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics?: string[];
  /** Learner profiles — shown as “Suitable for”. */
  suitableFor?: string[];
  /** Shown as a pill on the card (e.g. “New”). */
  badge?: string;
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
        suitableFor: ["School & college students", "Beginners curious about AI", "Career explorers"],
        badge: "New",
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
        suitableFor: ["First-time users", "Students", "Anyone needing safe daily internet skills"],
      },
      {
        id: "web-dev",
        title: "Web Development",
        logoSrc: "/branding/course-icons/html5.svg",
        duration: "2 months",
        description:
          "Web foundations and client-side skills for real pages and job readiness.",
        topics: ["HTML 5.0", "CSS", "JavaScript", "Practical project work"],
        suitableFor: ["Students after DCA/PGDCA", "Job seekers", "Self-learners building a portfolio"],
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
        suitableFor: ["B.Sc. / B.Com. students", "Engineering basics", "Interview preparation starters"],
      },
      {
        id: "python",
        title: "Python",
        logoSrc: "/branding/python-logo-only.svg",
        duration: "1 month",
        description: "Python basics through scripts, data tasks, and next-step readiness.",
        suitableFor: ["Students", "Job seekers", "Career upskillers"],
      },
      {
        id: "core-java-7",
        title: "Java",
        logoSrc: "/branding/course-icons/java.svg",
        duration: "2 months",
        description: "OOP, core concepts, and practice toward desktop and interview style tasks.",
        suitableFor: ["Programming track learners", "Students after C/Python", "Job-focused practice"],
      },
      {
        id: "oracle-10g",
        title: "Oracle 10g",
        logoSrc: "/branding/course-icons/oracle.svg",
        duration: "1 month",
        description: "SQL, PL/SQL foundations, and hands-on database practice.",
        suitableFor: ["DCA/PGDCA students", "Data & backend starters", "Job seekers"],
      },
      {
        id: "tally-prime",
        title: "Tally Prime",
        symbol: "📊",
        duration: "1 month",
        description: "Accountancy, GST-oriented practice, and office-ready Tally skills.",
        topics: [
          "Company & ledger setup",
          "Vouchers & GST basics",
          "Inventory & reports",
          "Hands-on office scenarios",
        ],
        suitableFor: ["Commerce students", "Accounts assistants", "Job seekers", "Small business owners"],
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
        duration: "Confirm at centre",
        description: "A focused diploma covering three core programming languages in depth.",
        topics: ["C", "Python", "Core Java 7"],
        suitableFor: ["Serious coding learners", "Students wanting a programming bundle"],
      },
      {
        id: "dpl-dbms",
        title: "Diploma in Programming Languages & DBMS",
        duration: "Confirm at centre",
        description: "Programming plus database skills for data-aware applications.",
        topics: ["C", "Core Java 7", "Oracle 10g"],
        suitableFor: ["Students", "Job seekers needing DB + code skills"],
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
        duration: "Confirm at centre",
        description: "MS Office and internet essentials for school, office, and daily work.",
        topics: [
          "Introductory Concepts",
          "MS Word",
          "MS PowerPoint",
          "MS Excel",
          "Internet",
        ],
        suitableFor: ["School students", "Homemakers", "Office beginners"],
      },
      {
        id: "doa",
        title: "II. Diploma in Office Automation (DOA)",
        duration: "Confirm at centre",
        description: "DMO level plus access, typing, and file management for automation roles.",
        topics: [
          "DMO Topics",
          "MS Access",
          "Telugu Typing",
          "File Management",
          "Speed Typing",
        ],
        suitableFor: ["Job seekers", "Administrative roles", "Students needing typing + Office"],
      },
      {
        id: "dca",
        title: "III. Diploma in Computer Applications (DCA)",
        duration: "~3 months (practical batches)",
        description:
          "Diploma in Computer Applications — MS Office, internet, Access, and web basics with hands-on practice.",
        topics: [
          "Introductory Concepts",
          "MS Word, Excel, PowerPoint",
          "Internet & email basics",
          "MS Access",
          "HTML 5.0 (Part I & Part II)",
        ],
        suitableFor: ["Students", "Job seekers", "Homemakers", "Anyone new to computers"],
      },
      {
        id: "pgdca",
        title: "IV. PG Diploma in Computer Applications (PGDCA)",
        duration: "Confirm at centre",
        description: "Post-graduate track building on DCA with database and front-end web skills.",
        topics: [
          "DCA Topics",
          "Oracle 10g",
          "CSS",
          "JavaScript",
        ],
        suitableFor: ["Graduates", "Job seekers", "DCA completers going deeper"],
      },
      {
        id: "pgdoa",
        title: "V. PG Diploma in Office Automation (PGDOA)",
        duration: "Confirm at centre",
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
        suitableFor: ["Office job aspirants", "DOA graduates", "Accounts + admin roles"],
      },
      {
        id: "softech",
        title: "VI. Softech",
        duration: "Long program — confirm at centre",
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
        suitableFor: ["Career-focused learners", "After 10th/12th", "Full-stack office + IT path"],
      },
    ],
  },
];

/** All programs in a single list (category groupings in `courseCategories` are for admin/data only). */
export const allCourses: Course[] = courseCategories.flatMap((c) => c.courses);
