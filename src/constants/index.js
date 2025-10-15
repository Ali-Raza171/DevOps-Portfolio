import {
  gamivision,
  
  roverplaystudio,
  remotely,
  ntu,
  uol,
  college,
  aws,
  sololearn,
  naughty_monster,
  naughty_animal,
  naughty_dino,
  agent_hunt,
  rollingball,
  nova_assault,
  mini_bounce,
  smash_hit,
  ar_game,
  car_parking,

  
  portfolio,
  publiclab,
  zulip,
  devfolio,
  ethforall,
  apple,
  metaviz
} from "../assets";

import {
  AiFillGithub,
  
  AiFillApple,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
  
} from "react-icons/ai";

import {
  
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiVisualstudiocode,
  SiGit,
  SiMysql,
  SiFigma,
  SiCsharp,
  SiUnity,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAmazonaws,
  SiAzurepipelines,
  SiAwslambda,
  SiPrometheus,
  SiGrafana
} from "react-icons/si";

import {
  FaAppStore,
  FaHardHat,
  FaRust
  
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1x2rJn-gmptGzVGT7Zt_S7JtRFf20gvs8/view?usp=sharing";
export const repoLink = "https://github.com/Ali-Raza171/portfolio";

export const callToAction = "https://www.linkedin.com/in/aliraza124/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [

    {
    id: "education-1",
    icon: ntu,
    title: "Nottingham Trent University, UK",
    degree: "MSc Artificial Intelligence",
    duration: "Sept 2025 - Aug 2026",
    content1: "Major: Artificial Intelligence & Machine Learning",
    
  },
  {
    id: "education-2",
    icon: uol,
    title: "University of Lahore",
    degree: "BS in Software Engineering (BSSE)",
    duration: "Sept 2021 - Feb 2025",
    content1: "Major: Software Engineering",
    content2: "Minor: Data Science",
  },

  
];

export const achievements = [
  
  {
    id: "a-1",
    icon: aws,
    event: "AWS Certified Solutions Architect",
    position: "Amazon Web Services (AWS)",
    content1: "Earned AWS Solutions Architect – Associate certification, demonstrating expertise in designing scalable, secure, and cost-efficient cloud solutions.",
    content2: "Gained hands-on experience with AWS core services, including EC2, S3, Lambda, VPC, and IAM, optimizing cloud architectures for high availability and performance.",
    content3: "Applied AWS best practices in DevOps workflows, automating infrastructure deployment using Terraform, CloudFormation, and CI/CD pipelines.",
    article: "",
    project: "https://www.credly.com/badges/9957f7e0-ed7c-49dc-81cb-b0aba01ad31d/public_url",
    github: "",
  },
  
  {
    id: "a-1",
    icon: sololearn,
    event: "Python Certification",
    position: "Sololearn",
    content1: "Earned a Python Intermediate certification from SoloLearn, solidifying proficiency in core programming concepts.",
    content2: "Applied Python skills to develop game mechanics and backend systems, enhancing gameplay functionality and performance.",
    content3: "Continuously expanded Python knowledge through practice and projects, integrating new techniques into game development workflows.",
     
    article: "",
    project: "https://api2.sololearn.com/v2/certificates/CC-NVSJ1BOA/image/png",
    github: "",
  },
  
];


export const skills = [
  
  {
    title: "Skills",
    items: [
      
      {
        id: "f-1",
        icon: SiJenkins,
        name: "Jenkins",
      },
      {
        id: "f-2",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "f-3",
        icon: SiKubernetes,
        name: "Kubernetes",
      },
      {
        id: "f-4",
        icon: SiTerraform,
        name: "Terraform",
      },
     
      {
        id: "f-5",
        icon: SiAmazonaws,
        name: "AWS",
      },
      {
        id: "f-6",
        icon: SiAwslambda,
        name: "AWS Lambda",
      },
      {
        id: "f-7",
        icon: SiAzurepipelines,
        name: "Azure Pipeline",
      },
      {
        id: "f-8",
        icon: SiPrometheus,
        name: "Prometheus",
      },
      {
        id: "f-9",
        icon: SiGrafana,
        name: "Grafana",
      },
     
    ],
  },
  {
    title: "Programming Languages",
    items: [
      
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
    
    
     
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
     
     
    ],
  },
  {
    title: "Others",
    items: [

      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-1",
        icon: SiFigma,
        name: "Figma",
      },
      
      
      
     
      
    ],
  },
];

export const experiences = [

  {
    organisation: "MetaViz Pro",
    logo: metaviz,
    link: "",
    positions: [
      {
        title: " DevOps Engineer",
        duration: "Sep 2024 - Aug 2025",
        content: [
          {
            text: "Experience with CI/CD & Cloud Deployments:",
            link: "",
          },
           {
            text: "I have deployed Jenkins and Docker-based projects on AWS EC2, set up CI/CD pipelines using Jenkins and GitHub, and containerized applications with Docker. My experience includes automating software delivery and ensuring scalable deployments in cloud environments.",
            link: "",
          },
          {
            text: "AWS Infrastructure Automation with Terraform: I have automated AWS infrastructure setup using Terraform, provisioning EC2 instances for workstations, S3 storage for data management, and DynamoDB tables for scalable databases. This experience has enhanced my expertise in Infrastructure as Code (IaC) and cloud automation.",
            link: ""
          }
          
        ],
      },
    ],
  },
  {
    organisation: "RoverPlay Studio",
    logo: roverplaystudio,
    link: "",
    positions: [
      {
        title: "Game Developer",
        duration: "April 2024 - Jul 2024",
        content: [
          {
            text: "At Rover Play Studio, I honed my skills in game development by transforming existing games into new and engaging experiences. My role involved customizing the user interface, modifying character designs, and reshaping game environments to create unique and innovative gameplay.",
            link: "",
          },
          {
            text: "This hands-on experience has strengthened my ability to adapt and enhance game elements, ensuring that each project stands out with fresh and compelling content.",
            link: ""
          }
          
        ],
      },
    ],
  },
 
  
];


  


export const projects = [
  
  {
    id: "project-1",
    title: "Naughty Monsters Escape Daddy  @RoverPlay Studio",
    github:"https://apps.apple.com/sa/app/naughty-monsters-escape-daddy/id6621267832",
    
    image: naughty_monster,
    content:
      "Reskinned the game Naughty Monster Escape Daddy by Redesigning Characters, Player models, and UI elements. Delivered a fresh visual style, improving gameplay aesthetics and user experience. Contributed to enhancing the overall game design and player engagement.",
       stack: [
      {
        id: "icon-1",
        icon: SiCsharp,
        name: "C#"
      },
     
      
    ],
  },
  {
    id: "project-2",
    title: "Agent Hunt: Hitman Shooter  @RoverPlay Studio",
    
    
    image: agent_hunt,
    content:
      "Revamped player models, NPCs, and weapons for AGENT HUNT creating stunning new skins and immersive environments. Designed engaging levels and challenging bosses, enhancing both visual appeal and gameplay. Delivered impactful design improvements, elevating the overall player experience.",
       stack: [
      {
        id: "icon-1",
        icon: SiCsharp,
        name: "C#"
      },
     
      
    ],
  },

  {
  id: "project-3",
  title: "Naughty Animal Escape  @RoverPlay Studio",
  github:"https://apps.apple.com/us/app/naughty-animal-escape/id6648784721",
  
  image: naughty_animal,
  content:
    "Transformed Naughty Animal by redefining its environment, levels, and characters, injecting new life into the game. Redesigned other players to enhance the visual and interactive experience. Delivered a refreshed and engaging game world that elevated player enjoyment and immersion.",
     stack: [
    {
      id: "icon-1",
      icon: SiCsharp,
      name: "C#"
    },
   
    
  ],
  
},

{
  id: "project-4",
  title: "Naughty Dino's Eggs Collector  @RoverPlay Studio",
  
  
  image: naughty_dino,
  content:
    "Revitalized Naughty Dino's Eggs Collector by updating its environments, levels, characters, and other players. Enhanced the gameplay experience with a charming little dinosaur collecting eggs within a time limit to complete levels. Delivered a vibrant and engaging game world that enriched player interaction and enjoyment.",
     stack: [
    {
      id: "icon-1",
      icon: SiCsharp,
      name: "C#"
    },
   
    
  ],
  
},
  {
    id: "project-5",
    title: "AR-Based Shooting Game for Kids",
    github: "",
    
    image: ar_game,
    content:
      "My Final Year Project (FYP), Experience an educational adventure with our AR-based shooting game designed for children. Combining the excitement of shooting gameplay with interactive math challenges, this project integrates Augmented Reality (AR) to create a fun and immersive learning experience. Children can explore AR-enhanced environments, solve math problems through gameplay, and enjoy dynamic educational entertainment.",
    stack: [
      {
        id: "icon-1",
        icon: SiCsharp,
        name: "C#"
      },
    ],
  },

  {
    id: "project-6",
    title: "Rolling Ball",
    github: "https://github.com/Ali-Raza171/Rolling-Ball",
    
    image: rollingball,
    content:
      "I built a dynamic Rolling Ball game from scratch, where the ball navigates through challenging levels and dodges various obstacles. The game features a main menu for easy navigation, a scoring system to track progress, and customizable game levels to keep the gameplay fresh and engaging. This project delivers an exciting and immersive gaming experience for players.",
       stack: [
      {
        id: "icon-1",
        icon: SiCsharp,
        name: "C#"
      },
     
      
    ],
  },
   
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/aliraza124/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Ali-Raza171",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:aliraza.devops.eng@gmail.com",
  },
];

export const aboutMe = {
  name: "ALI RAZA",
  tagLine: "DevOps Engineer | AWS Certified Solutions Architect | CI/CD & Cloud Automation | Docker, Kubernetes & Jenkins",
  intro: "Passionate DevOps Engineer with expertise in CI/CD, cloud automation, and infrastructure as code (IaC). Skilled in Docker, Kubernetes, Jenkins, and AWS, optimizing workflows for scalability and efficiency."
}
