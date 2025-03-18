// import image1 from "../Images/tool.png";
// import image2 from "../Images/tool.png";
// import image3 from "../Images/tool.png";
import image4 from "../Images/soft.png";
// import image5 from "../Images/image1.jpg";
import image6 from "../Images/movie.png";
import image7 from "../Images/Todo.png";
import image8 from "../Images/screenshot.png";
import image9 from "../Images/hotel.png";
import image10 from "../Images/blog.png";
import image15 from "../Images/chat.png"
import pythonhack from  "../Images/pythonhackathon.png";
import react from   "../Images/pythonhackathon.png";
import dt from "../Images/datascience.webp";
import python from "../Images/pythonhackathon.png";
//import bot from "../Images/Bot 1.png";
import one from "../Images/11.webp";
import two from "../Images/22.webp";
import three from "../Images/33.webp";
import four from "../Images/44.webp";
import five from "../Images/55.webp";
import six from "../Images/66.webp";

export const SKILLS = [
    {
        title: "Frontend",
        icon: image4,
        skills: [
            { skill: "Vue", percentage: "80%"},
            { skill: "Javascript", percentage: "98%"},
            { skill: "React.Js", percentage: "88%"},
            { skill: "Next.js", percentage: "80%"}
        ],
    },
    {
        title: "Backend",
        icon: image4,
        skills: [
            { skill: "Javascript", percentage: "85%"},
            { skill: "Node.js", percentage: "80%"},
            { skill: "Express.js", percentage: "80%"},
            { skill: "Python", percentage: "60%"},
        ],
    },
    {
        title: "Tools",
        icon: image4,
        skills: [
            { skill: "Git & Github", percentage: "85%"},
            { skill: "Visual Studio Code", percentage: "95%"},
            { skill: "Linux OS", percentage: "90%"},
            { skill: "Responsive Design", percentage: "88%"}
        ],
    },
    {
        title: "Soft Skills",
        icon: image4,
        skills: [
            { skill: "Problem-solving", percentage: "80%"},
            { skill: "Collaboration", percentage: "98%"},
            { skill: "Attention to Detail", percentage: "75%"},
            { skill: "Team-work", percentage: "90%"}
        ],
    },
    {
        title: "Databases",
        icon: image4,
        skills: [
            { skill: "MY SQL", percentage: "80%"},
            { skill: "Mongo DB", percentage: "90%"},
            { skill: "Postgres", percentage: "65%"},
            { skill: "MariaDB", percentage: "60%"}
            // { skill: "", percentage: "90%"}
        ],
    },
    {
        title: "Cloud-Services",
        icon: image4,
        skills: [
            { skill: "AWS", percentage: "80%"},
            { skill: "Render", percentage: "90%"},
            { skill: "Vercel", percentage: "75%"},
            { skill: "Firebase", percentage: "90%"}
        ],
    },
];
export const WORK_EXPERIENCE = [
    {
        title: "React Developer Intern at Glitex Solutions",
        date: "January 2022 - April 2022",
        responsibilities: [
            "Developed and maintained web applications using React.js and Redux",
            "Collaborated with designers and backend developers to improve usability",
            "Implemented responsive design to enhance user experience on mobile devices",
            "Participated in code reviews and provided constructive feedback to peers"
        ]
    },    
    {
        title: "Junior Software Developer - PLP",
        date: "June 2024 - Present",
        responsibilities: [
            "Built and maintained features for web applications using React.js",
            "Integrated RESTful APIs to fetch and display data dynamically",
            "Collaborated with senior developers to understand and implement new features",
            "Wrote unit and integration tests to ensure code quality and functionality"
        ]
    },    
    {
            title: "Software Developer Intern - Zaptech",
            date: "October 2024 - December 2024",
            responsibilities: [
                "Developed and maintained websites using Next.js",
                "Built reusable UI components for scalability",
                "Collaborated with clients to refine technical solutions",
                "Optimized web applications for performance and accessibility"
            ]
        },
        {
            title: "Software Developer Intern - BitterBrains",
            date: "January 2025 - Present",
            responsibilities: [
                "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
                "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
                "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
                "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
              
            ]
        }
    
];

export const PROJECTS = [
    { name: 'VisualEditor', description: 'Nextjs VisualEditor for creating questions and answers and automatically generating markdown files.',
        image: five, link: 'visual-editor-3ih8.vercel.app/' },
    { name: 'Pdf-question-search', description: 'A Next.js + OpenAI-powered web app that allows users to upload PDFs, extract text, generate questions, and get AI-powered answers based on the document content.',
        image: four, link: 'pdf-question-search.vercel.app' },
    { name: 'Personal Finance Tracker', description: 'Tech Stack : Nextjs, OpenAI GPT, Chartjs, REST APIs, WebSockets, NextAuth, Dockerization, Internationalization',
        image: three, link: 'next-auth-three-swart.vercel.app' },    
    { name: 'NextDasboard', description: 'Dashboard project - Nextjs(Streaming, skeletons, parallel data fetching, dynamic rendering, pnpm package). Postgress Database,',
        image: three, link: 'next-dashboard-ruby-ten.vercel.app' },
    { name: 'NeemaBot', description: 'An  AI-powered chatbot for mental health support',
        image: six, link: 'https://ai-powered-chatbot-2.onrender.com' },
    { name: 'Learning Management System', description: 'a fully functional LMS using Django Rest Framework for backend APIs and React for a dynamic, user-friendly frontend. The platform supports seamless payments through Stripe and PayPal,',
        image: two, link: '' },
    { name: 'Chatgpt Clone', description: 'This project is a ChatGPT clone built with React for the frontend, Flask for the backend, and OpenAIs GPT-3.5-turbo model for generating responses. It features a user-friendly chat interface',
        image: one, link: '' },
    { name: 'Blog Application', description: 'A Blog application built on the MERN stack, enables users to create, edit, and delete blog posts with ease. It includes user authentication and a dynamic, responsive interface. MongoDB manages the database, Express.js and Node.js handle server-side logic, while React provides a seamless, interactive user experience.', 
        image: image10, link: 'https://blog-application-6-6z2e.onrender.com/' },
    { name: 'Chat Application', description: 'This chat application leverages Node.js for the backend and integrates with ChatEngine.io to handle real-time messaging. It utilizes react-chat-engine-pretty for a prebuilt, customizable UI, providing a seamless user experience. The application supports group chats, allowing multiple users to communicate within shared chat rooms efficiently.', 
            image: image15, link: 'https://chatapplicationnodejs-2.onrender.com/' },
    { name: 'Movie Application', description: 'A React App that uses TvMazeApi API to fetch and display movies. One is also able to play the movie by being directed to their official site, or download the movie', 
            image: image6, link: 'https://movies-elx3ictfs-neemamwendes-projects.vercel.app/' },
    { name: 'Coffee Website', description: 'A React coffee App designed to showcase the different variaties of the brands of coffee.' 
        , image: image8, link: 'https://coffee-app-chi.vercel.app/' },
    { name: 'Hotel Application', description: 'A Hotel coffee App designed to showcase the different variaties of the brands of coffee.' 
            , image: image9, link: 'https://coffee-app-chi.vercel.app/' },
    { name: 'Todo-List App', description: 'A todo list react app that enables one to manage their daily activities in an orderly manner.', 
            image: image7, link: 'https://todo-app-teal-phi-64.vercel.app/' },
  ];

export const portolioProjects = [
    {
      category: 'filter-app',
      img: python,
      title: 'NodeJs ',
      description: 'pirple',
      detailsLink: 'https://www.credly.com/badges/ea128641-fa6a-4c47-8bfd-5ee4958d1516/public_url',
    },
    {
      category: 'filter-web',
      img: python,
      title: 'React',
      description: 'Pirple',
      detailsLink: 'portfolio-details.html',
    },
    {
      category: 'filter-app',
      img: python,
      title: 'ExpressJs',
      description: '.NET',
      detailsLink: 'https://www.freecodecamp.org/certification/fcc6af568b2-b8f5-41a7-8ed1-969f34621562/foundational-c-sharp-with-microsoft',
    },
    {
      category: 'filter-card',
      img: pythonhack,
      title: 'Python',
      description: 'Card',
      detailsLink: 'portfolio-details.html',
    },
    {
      category: 'filter-web',
      img: react,
      title: 'Node',
      description: 'Web',
      detailsLink: 'portfolio-details.html',
    },
    {
      category: 'filter-app',
      img: dt,
      title: 'Cyber Security 101',
      description: 'Simply Learn',
      detailsLink: 'https://simpli-web.app.link/e/72XPIc3OvJb',
    }
  ];