import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    zone01,
    aws,
    django,
    python,
    postgres,
    bootstrap,
    cLogo,
    golang,
    cPlusPlus,
    mysql,
    vite,
    groupie,
    netfix,
    systemMonitor,
    terminalUi,
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
    {
        name: "CSS",
        icon: css,
    },
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
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
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
    },{
        name: "Golang",
        icon: golang,
    },{
        name: "C++",
        icon: cPlusPlus,
    },{
        name: "MySQL",
        icon: mysql,
    },{
        name: "Vite",
        icon: vite,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    // {
    //     name: "Postgres",
    //     icon: postgres,
    // },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Docker",
        icon: docker,
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
];

const projects = [
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
        source_code_link: "https://github.com/Raymond9734/Netfix",
    },
    {
        name: "Groupie",
        description:
            "Groupie Tracker is a web application that provides information about music artists, including concert dates and locations, by fetching data from a public API and presenting it through a user-friendly interface.",
        tags: [
            {
                name: "JavaScript",
            },
            {
                name: "HTML",
            },
            {
                name: "CSS",
            },
        ],
        image: groupie,
        source_code_link: "https://github.com/Raymond9734/groupie-track",
    },
    // {
    //     name: "Atm System",
    //     description:
    //         "The ATM Management System is a command-line application in C that enables users to manage their bank accounts, offering features like secure user authentication, account management and transaction history, with data stored persistently in an SQLite database.",
    //     tags: [
    //         {
    //             name: "C",
    //         },
    //         {
    //             name: "SQLite",
    //         },
    //     ],
    //     image: terminalUi,
    //     source_code_link: "https://github.com/Raymond9734/Atm-System",
    // },
    // {
    //     name: "Wget",
    //     description:
    //         "wget in Go is a command-line tool that replicates the functionality of the original wget, allowing users to download files, manage download speeds, download multiple files, and mirror websites, all while supporting HTTP and HTTPS protocols.",
    //     tags: [
    //         {   
    //             name: "Golang",
    //         },
    //     ],
    //     image: terminalUi,
    //     source_code_link: "https://github.com/Raymond9734/wget",
    // },
    // {
    //     name: "Net-cat",
    //     description:
    //         "TCP-Chat is a recreation of the NetCat utility in Go, featuring a client-server architecture that enables multiple clients to engage in group chat. It supports TCP communication, message broadcasting with timestamps, client notifications for joining and leaving and ensuring a responsive chat experience.",
    //     tags: [
    //         {   
    //             name: "Golang",
    //         },
    //     ],
    //     image: terminalUi,
    //     source_code_link: "https://github.com/Raymond9734/net-cat",
    // },
    
];

export { services, technologies, experiences, projects };
