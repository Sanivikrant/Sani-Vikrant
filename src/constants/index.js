import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";


export const HERO_CONTENT = `As a Full Stack Developer, I specialize in building complete web applications that are efficient, scalable, and user-friendly. I work extensively with React.js, Node.js, Express.js, and MongoDB, ensuring seamless integration between the frontend and backend. My development workflow emphasizes clean code, modular architecture, and responsive design. I also have hands-on experience with cloud platforms like AWS, along with proficiency in RESTful APIs, EJS templating, and database management using both SQL and NoSQL systems. My projects reflect a deep understanding of software engineering principles, backed by practical experience in IoT systems, AI integration, and secure coding practices.

`;

export const ABOUT_TEXT = `I'm Sani Vikrant, a Computer Science & Engineering undergraduate at Chandigarh University with a strong passion for technology and innovation. I thrive at the intersection of software and hardware, often integrating web technologies with embedded systems. My internship at iHUB DivyaSampark, IIT Roorkee, allowed me to work on nationally recognized IoT projects, sharpening my problem-solving and collaborative skills. I am also certified in Cloud Computing, SQL, and Cybersecurity, and continuously strive to stay updated with the latest industry practices. Outside of coding, I enjoy solving algorithmic challenges, exploring open-source tools, and building systems that make a real-world impact.

`;

export const EXPERIENCES = [
  {
    year: "May 2025 - current",
    role: "MERN Stack",
    company: "Omnia Papers",
    description: `A responsive web app built with React and Node.js to showcase paper products. Includes modular components like navbar, hero, features, and footer with clean UI and scalable structure.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    certificateLink: "" // Add if available

  },
  {
    year: "June 2023 - August 2023",
    role: "Full Stack Web Developer Intern",
    company: "iHUB DivyaSampark, IIT Roorkee",
    description: `Worked on MERN-based full-stack projects, Built and deployed end-to-end applications, focusing on scalable backend services, intuitive frontend interfaces, and efficient database management during the internship.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS", "IoT"],
    certificateLink: "" // Add if available
  },
];

export const PROJECTS = [
  {
    title: "Healthy Food With Millets WebApp",
    image: project2, // Replace with actual image import or URL
    description:
      "A full-stack web application designed to promote healthy living by tracking daily calorie intake. Built using React for the frontend and MongoDB for secure user data storage, with a lightweight JSON-based approach for data handling.",
    technologies: ["React.js", "MongoDB", "JSON", "Node.js"],
    link: "https://diet-application.netlify.app/" // Replace with actual URL
  },
  {
    title: "CRUD Web Application",
    image: project1, // Replace with actual image import or URL
    description:
      "A CRUD (Create, Read, Update, Delete) web application built with Node.js and Express.js for backend functionality. EJS templating was used to dynamically render HTML pages, featuring intuitive forms and a clean UI for seamless data management.",
    technologies: ["Node.js", "Express.js", "EJS", "HTML", "CSS"],
    link: "https://github.com/Sanivikrant/Crud-web-application" // Replace with actual URL
  },

  {
    title: "Social-Media-BACKEND",
    image: project6, // Replace with actual image import or URL
    description:
      "This project is a Node.js-based backend for a basic social media platform, implementing all core functionalities expected in such a system. It allows users to create profiles, authenticate using JWT, follow other users, create and interact with posts, and build personalized content feeds.",
    technologies: ["Node.js", "Express.js","JWT","Postman","SQL"],
    link: "https://github.com/Sanivikrant/Social-Media-BACKEND" // Replace with actual URL
  },

  {
    title: "E-Commerce Website",
    image: project3, // Replace with actual image import or URL
    description:
      "A full-stack e-commerce platform with a React.js frontend and Node.js + Express.js backend. Features include JWT authentication, secure user sessions, and extensive API testing via Postman.",
    technologies: ["React.js", "Node.js", "Express.js", "JWT", "Postman"],
    link: "https://github.com/Sanivikrant/E--Commerce" // Replace with actual URL
  },
  {
    title: "NTP Client-Server Time Clock",
    image: project4, // Replace with actual image import or URL
    description:
      "A real-time clock application using Network Time Protocol (NTP), displaying accurate time on an LED matrix. Demonstrates proficiency in networking protocols and hardware interfacing.",
    technologies: ["NTP Protocol", "IoT", "LED Matrix", "Networking"],
    link: "https://github.com/Sanivikrant/NTP---8266---Table-Clock" // Replace with actual URL
  },
  {
    title: "Soil Monitoring System for Precision Agriculture",
    image: project5, // Replace with actual image import or URL
    description:
      "An IoT-based soil monitoring system using ESP32 for data capture and LoRa mesh network for transmission. Implemented AI models for analyzing and predicting soil quality, stored securely via AWS S3.",
    technologies: ["ESP32", "LoRa Mesh", "AWS S3", "I2C", ],
    link: "lgaa duga baad m" // Replace with actual URL
  },
];


export const CONTACT = {
  address: "Kannauj, Uttar Pradesh, IN 209732 ",
  phoneNo: "+918707710304 ",
  email: "sanivikrant4@gmail.com",
};
