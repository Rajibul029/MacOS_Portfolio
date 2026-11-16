const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "Smart Study Material Access Platform Using MERN Stack and AI Integration",
    image: "/images/blog1.png",
    link: "https://timez.onrender.com/post/6967ea8ef819eb6f2d173a6e",
  },
  {
    id: 2,
    date: "Dec 28, 2025",
    title: "Machine Learning Based Performance Prediction for Students",
    image: "/images/blog2.png",
    link: "https://timez.onrender.com/post/6967ead4f819eb6f2d173a72",
  },
  {
    id: 3,
    date: "Jan 13, 2026",
    title: "Research Insights on Transformer Models and Their Impact on NLP",
    image: "/images/blog3.png",
    link: "https://timez.onrender.com/post/6967ea55f819eb6f2d173a6a",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "GSAP", "Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Spring Boot"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "AI/ML",
    items: ["Machine Learning", "Deep Learning", "NLP"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Kaggle"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Rajibul029",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "#",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://linkedin.com/in/rajibul-islam-rj29",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpeg",
  },
  {
    id: 2,
    img: "/images/gal2.jpeg",
  },
  {
    id: 3,
    img: "/images/gal3.jpeg",
  },
  {
    id: 4,
    img: "/images/gal4.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Doctor Appointment Booking System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "MediMeet.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Doctor Appointment Booking System 'MediMeet' is a web-based application that enables patients to book medical appointments online with ease.",
            "It allows users to view doctor profiles, check available time slots, and schedule appointments in real time.",
            "Doctors can manage their schedules and appointment requests through a dedicated dashboard.",
            "The system reduces manual effort, saves time, and improves overall efficiency in healthcare service management.",
          ],
        },
        {
          id: 2,
          name: "MediMeet.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://medimeet-16in.onrender.com",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "MediMeet.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Finex Bank of India (FBI)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[25vh] left-7",
      children: [
        {
          id: 1,
          name: "Banking System Management.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Banking System Management 'Finex Bank of India (FBI)' is a web-based application designed to handle core banking operations in a secure and efficient manner. ",
            "It allows users to create accounts, perform deposits, withdrawals, and fund transfers, and view detailed transaction history.",
            "The system ensures data security through authentication and authorization mechanisms.",
            "Overall, it provides a reliable digital platform that simplifies day-to-day banking activities for both customers and administrators.",
          ],
        },
        {
          id: 2,
          name: "Finex_Bank_of_India.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://fbi-2tr3.onrender.com",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Finex_Bank_of_India.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },
    
    //----------------------------
    //Project-3
    {
      id: 7,
      name: "Builder-AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-60 right-20",
      windowPosition: "top-[42vh] left-18",
      children: [
        {
          id: 1,
          name: "Builder-AI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Builder AI is an AI-powered web application that enables users to generate project code and files simply by describing their ideas in natural language.",
            "It allows users to enter prompts and receive AI-generated code for their projects, making the development process faster and easier.",
            "The application uses AI integration to understand user requirements, generate relevant source code, and organize project files through a dedicated backend system.",
            "Builder AI reduces manual coding effort, saves development time, and makes software development more accessible and efficient.",
          ],
        },
        {
          id: 2,
          name: "Builder-AI.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://builder-ai-t6rl.onrender.com",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Builder-AI.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-4.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/vWS1rVJNaqCe7eCSaTNHGO/Builder-AI---Product-UI-Design?node-id=0-1&p=f",
          position: "top-60 left-5",
        },
      ],
    },
//----------------------------
    // ▶ Project 4
    {
      id: 8,
      name: "Smart Study Materials Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[63vh] left-17",
      children: [
        {
          id: 1,
          name: "Smart Study Materials Platform.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "SMART STUDY MATERIAL ACCESS PLATFORM is a web-based system designed to simplify how students access their academic resources.",
            "Students log in using their unique ID, and the system instantly fetches study materials based on their department and semester.",
            "Materials such as PDFs, videos, and slides can be delivered directly via email or WhatsApp for quick access.",
            "This platform saves time, reduces confusion, and ensures students always get the right content when they need it.",
          ],
        },
        {
          id: 2,
          name: "Smart_Study_Materials.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://smart-study-materials-frontend.onrender.com",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Smart_Study_Materials_Platform.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.png",
      description: [
        "Hey, I’m Rajibul 👋 — a Computer Science student who loves building web apps that look good, feel smooth, and don’t break for mysterious reasons.",
        "I mostly play around with JavaScript, React, Node.js, and MongoDB, and I get way too excited about clean UI, tiny animations, and fast-loading pages.",
        "I enjoy writing code that makes sense at 3 AM, because future-me deserves some respect too.",
        "When I’m not coding, I’m probably tweaking layouts one last time (again), learning something new in AI/ML, or convincing myself that this next feature is absolutely necessary 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
