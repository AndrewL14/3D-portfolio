import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    tripguide,
    threejs,
    docker,
  } from "../assets";
  import upwork from "../assets/company/upwork.png";
  import aws from "../assets/tech/aws.png";
  import java from "../assets/tech/java.svg";
  import springboot from "../assets/tech/Springboot.svg";
  import grade from "../assets/grade.png";
  import movie from "../assets/Movie.jpg";
  import portfolio from "../assets/portfolio.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];

  const socials = [
    {
      title: "Github",
      link: "https://github.com/AndrewL14"
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/andrew-x-lam/"
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AWS developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UX designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Springboot",
      icon: springboot,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Web Developer",
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#383E56",
      date: "January 2024 - Present",
      points: [
        "Developing and maintaining web applications using Springboot and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
  ];
  
  const projects = [
    {
      name: "Grader",
      description:
        "Web-API, designed for middle and high school teachers to grade their students' homework. and ease repetitive tasks.", 
      tags: [
        {
          name: "Springboot",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "pink-text-gradient",
        },
      ],
      image: grade,
      source_code_link: "https://github.com/AndrewL14/Student-tracker-API",
    },
    {
      name: "Movie Review API",
      description:
        "Web application anoumysly write review on the movie and get the average rating of the movie.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Restful API",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/AndrewL14/Movie-review-api",
    },
    {
      name: "3D portfolio",
      description:
        "designed and implemented a 3D interactive portfolio, showcasing my work and experience", 
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "three js",
          color: "green-text-gradient",
        },
        {
          name: "Render",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/AndrewL14/3D-portfolio",
    },
  ];
  
  export { services, socials, technologies, experiences, testimonials, projects };