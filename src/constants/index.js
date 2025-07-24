import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  zone01,
  django,
  python,
  postgres,
  bootstrap,
  cLogo,
  golang,
  cPlusPlus,
  mysql,
  vite,
  netfix,
  systemMonitor,
  biasharaTrack,
  healthNet,
  kintara,
  shop,
  ruby,
  rails,
  Berrijam,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Projects",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Golang Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database-Driven Application Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  // {
  //   name: "CSS",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //     name: "AWS",
  //     icon: aws,
  // },
  {
    name: "C",
    icon: cLogo,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "C++",
    icon: cPlusPlus,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Rails",
    icon: rails,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Zone 01 Kisumu",
    icon: zone01,
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Developing and maintaining dynamic, database-driven web applications using Django, JavaScript, and other web technologies to ensure functionality and user-friendly interfaces.",
      "Collaborating with team members across design, product, and development to deliver high-quality, scalable features that meet business and user needs.",
      "Handling full-stack development tasks, including setting up back-end logic, creating APIs, and integrating front-end components, providing a comprehensive approach to web application development.",
      "Conducting code reviews and implementing continuous improvements by refining code structure, optimizing for performance, and following best practices for maintainability and readability.",
      "Utilizing a structured approach to project development and maintenance, ensuring seamless deployments and scalable application updates.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Berrijam AI",
    icon: Berrijam, 
    iconBg: "#DDEEFF", 
    date: "May 2025 – Present",
    points: [
      "Building AI-powered web applications that solve real-world problems across healthcare, finance, and other industries.",
      "Designing and implementing RESTful APIs to support intelligent features, such as data-driven insights, automation, and smart workflows.",
      "Collaborating with cross-functional teams to deliver user-centric, high-performance solutions aligned with client and business needs.",
      "Contributing to the design and architecture of platforms that leverage AI and machine learning to enhance decision-making and operational efficiency.",
      "Ensuring code quality through regular reviews, performance optimization, and adherence to industry best practices.",
      "Maintaining a strong focus on usability, accessibility, and clean design across all product interfaces."
    ],
  }
  
];

const projects = [
  {
    name: "Biashara Track",
    description:
      "BiasharaTrack is an innovative business management platform designed to support informal traders in Kenya by providing culturally adapted, language-inclusive digital tools that function seamlessly without constant internet connectivity. The platform enhances inventory management, financial tracking, and sales recording.",
    tags: [
      {
        name: "Golang",
      },
      {
        name: "SQLite",
      },
      {
        name: "React JS",
      },
    ],
    image: biasharaTrack,
    source_code_link: "https://github.com/Raymond9734/",
    live_link: "https://biasharatrack.onrender.com/",
  },
  {
    name: "Kintara",
    description:
      "Kintara is a secure, blockchain-powered platform designed to support survivors by enabling anonymous and tamper-proof case reporting. Built on the ICP Blockchain, it ensures immutable records, smart contract automation, and transparent fund tracking",
    tags: [
      {
        name: "React JS",
      },
      {
        name: "Rust",
      },
      {
        name: "ICP",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: kintara,
    source_code_link: "https://github.com/Raymond9734/",
    live_link: "https://24dyw-2yaaa-aaaam-adxmq-cai.icp0.io/",
  },
  {
    name: "HealthNet Ai",
    description:
      "HealthNet AI is an offline-first healthcare platform designed to enhance patient management in underserved regions with limited connectivity. Powered by AI-driven analytics and a scalable Go backend",
    tags: [
      {
        name: "React JS",
      },
      {
        name: "Golang",
      },
      {
        name: "SQLite",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: healthNet,
    source_code_link: "https://github.com/Raymond9734/",
    live_link: "https://healthnetai.vercel.app/",
  },
  {
    name: "System Monitor",
    description:
      "A C++ desktop app using Dear ImGui to deliver real-time insights into CPU, memory, disk, and network performance via a clear, interactive, and customizable interface.",
    tags: [
      {
        name: "C++",
      },
      {
        name: "Dear ImGui",
      },
    ],
    image: systemMonitor,
    source_code_link: "https://github.com/Raymond9734/System-monitor",
  },
  {
    name: "Netfix",
    description:
      "A Django platform connecting companies and customers with user-friendly profiles and service management, featuring responsive design, and configurable SQLite database.",
    tags: [
      {
        name: "Python",
      },
      {
        name: "SQLite",
      },

      {
        name: "Django",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
    ],
    image: netfix,
    source_code_link: "https://github.com/Raymond9734/",
  },
  {
    name: "Shop",
    description:
      "This is a Ruby on Rails e-commerce application that features comprehensive user authentication, product management, and shopping cart functionality, with the standout feature being integration with Mpesa payment system for processing transactions in real-time.The project demonstrates implementation of a complete e-commerce solution with secure payment processing capabilities specifically tailored for the African market. ",
    tags: [
      {
        name: "Ruby on Rails",
      },
      {
        name: "HTML",
      },
      {
        name: "SCSS",
      },
      {
        name: "Mpesa",
      },
      {
        name: "JavaScript",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/Raymond9734/",
  },
  // {
  //   name: "Groupie",
  //   description:
  //     "Groupie Tracker is a web application that provides information about music artists, including concert dates and locations, by fetching data from a public API and presenting it through a user-friendly interface.",
  //   tags: [
  //     {
  //       name: "JavaScript",
  //     },
  //     {
  //       name: "HTML",
  //     },
  //     {
  //       name: "CSS",
  //     },
  //     {
  //       name: "Golang",
  //     },
  //   ],
  //   image: groupie,
  //   source_code_link: "https://github.com/Raymond9734/groupie-track",
  // },
];

export { services, technologies, experiences, projects };
