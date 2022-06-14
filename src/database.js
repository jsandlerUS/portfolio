import MyAyurvedaClinic from "./resources/Projects/MyAyurvedaClinic.png";
import EgyptChiropractic from "./resources/Projects/EgyptChiropractic.png";
import SusanaAyurveda from "./resources/Projects/SusanaAyurveda.png";
import JonathanImage from "./resources/Background/face1.png";
import slicedFace from "./resources/Background/sliced face.png";

import airbnb from "./resources/Logos/airbnb-logo.png";
import amazon from "./resources/Logos/amazon-logo.png";
import apple from "./resources/Logos/apple-logo.png";
import att from "./resources/Logos/att-logo.png";
import disney from "./resources/Logos/disney-logo.png";
import microsoft from "./resources/Logos/microsoft-logo.png";
import nike from "./resources/Logos/nike-logo.png";
import tesla from "./resources/Logos/tesla-logo.png";
import uber from "./resources/Logos/uber-logo.png";
import armada from "./resources/Logos/armada-logo.png";
import ECSITE from "./resources/Logos/ECSite-logo.png";
import simple from "./resources/Logos/simple-logo.png";

export const dataFlow = [
  {
    name: "Home",
    items: [
      {
        name: "Professional\nExperience",
        items: [
          {
            name: "ECSITE",
            techStack: [
              'TypeScript', 'JavaScript', 'React', 'Redux', 'Python', 'Flask', 'Selenium', 'Apium', 'Jira', 'Postman', 'Zephyr Squad', 'AWS S3'
            ],
            viewLink: "https://ecsiteapp.com/",
            description: "ECSITE is an innovative high-grow Cloud-based company disrupting the Construction and Wireless Telecom Infrastructure sectors leading into 5G and beyond. As Quality Assurance Engineer, I had the opportunity to design and build an Agnostic Automation Test Framework to automate over 1000 test cases across 5 platforms working with technologies like AWS S3 services, React, Flask, Python, and JavaScript.\n\nI provide technical support to the engineering team in an Agile Environment and I’m currently improving the productivity of one of the services by designing a 4-8x feature. I weekly participate in App release processes with 10,000 daily customer data entry points.",
            images: [ECSITE],
          },
          {
            name: "Simple\nBreakthrough",
            techStack: [
              "JavaScript",
              "Redux",
              "React",
              "Nodejs",
              "Expressjs",
              "HTTPS",
              "OAuth 2.0",
            ],
            viewLink: "http://jsandlerus.github.io/wholesale-portal",
            description: "Simple Breakthrough software company creates unique business solutions for industry-specific problems. I had the great pleasure of being picked up by Jackson Felty, one of the co-founders of Simple Breakthrough, to join their lines as a Front-End Software Engineer.\n\nWorking with technologies like React, JavaScript, Redux, NodeJS, and MongoDB, I lead the development of the User Experience for a Wholesale platform with a product management system.",
            github: "https://github.com/jsandlerus/wholesale-portal",
            images: [simple],
          },
          {
            name: "Your\nCompany",
            techStack:[ "Any tech stack"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [airbnb, amazon, apple, att, disney, microsoft, nike, tesla, uber],
          },
          {
            name: "Armada",
            techStack: [
              'JavaScript', 'Node.js', 'HTML5', 'CSS', 'Bootstrap', 'Jquery', 'Socket.io'
            ],
            viewLink: "http://armadaaero.com",
            description: "Armada Aeronautics is a 21st-century transportation company disrupting air travel with new modes of transportation. Armada develops a 0-carbon solution for modern aviation with innovations in software and hardware.\n\nAs a Front-End Engineer and Lead Developer, my work at Armada allows me to lead the development of their first internal flight system, including the Pilot Flying Control UI, Developers Diagnostic View of Engines, and the Blackbox recovery system of the vehicle. I was also honored to present the advances of our technology at a private investors event.",
            images: [armada],
          },
        ],
      },
      {
        name: "Contact",
        image: slicedFace,
        socialMedia: {
          facebook: "https://www.facebook.com/jonathan.sandler.aol/" ,
          twitter: "https://twitter.com/AolSandler" ,
          linkedin: "https://www.linkedin.com/in/jsandler-us/" ,
          github: "https://github.com/jsandlerus" ,
        },
        contact: {
          phone: "+1 510 938 2813" ,
          email: "jsandler.aol@gmail.com" ,
        },
      },
      {
        name: "About",
        image: JonathanImage,
        description: "Hi! My name is Jonathan Sandler and I’m a Full Stack Software Engineer based in San Francisco, United States. My main area of expertise is Front-End development focused on User Experience and Creative Development.\n\nI found my passion for technology and communication 4 years ago, after attending 42 Silicon Valley Bootcamp. Since then, I had the pleasure to work with very talented people who had empowered me throughout my career.\n\nI get excited at solving really complex problems and I love creating unique user experiences through cutting-edge technology with all my heart! I can’t describe how thankful I am for being part of this incredible community of developers in such amazing times of innovation.\n\nI feel privileged for having the chance to learn something new every day and I look forward to continue sharing all the incredible gifts this career has brought to my life. I believe coding is an essential part of humanity and it's the fuel of the new era. We have a chance to change the Status Quo together.",
        techStack: [{Languages: [ 'JavaScript (AJAX, JSON)', 'HTML5', 'CSS', 'C', 'Python', 'Java', 'TypeScript']},
        {Frameworks:['Redux', 'React', 'Express.js', 'Jquery', 'Socket.io', 'Flask','Node.js']},
        {Databases:['Git', 'GitHub', 'Command Line', 'MongoDB', 'AWS S3']},
        {Tools:['Postman', 'Jira', 'Zephyr Squad', 'Agile Development', 'Material-ui(MUI)', 'Bootstrap', 'Cucumber', 
          'Selenium', 'Apium']}
        ],
        github: "https://github.com/jsandlerus",
      },
      {
        name: "Projects",
        items: [
          {
            name: "My Ayurveda\nclinic",
            techStack: [
              "JavaScript",
              "Redux",
              "React",
              "Nodejs",
              "Expressjs",
              "HTTPS",
              "OAuth 2.0",
            ],
            viewLink: "http://jsandlerus.github.io/myayurvedaclinic",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            github: "https://github.com/jsandlerus/myayurvedaclinic",
            team: 1,
            images: [MyAyurvedaClinic, EgyptChiropractic, SusanaAyurveda],
          },
          {
            name: "Egypt\nChiropractic",
            techStack: ["Wix"],
            viewLink: "https://viperayurveda.wixsite.com/egyptchiropractic",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            github: "https://viperayurveda.wixsite.com/egyptchiropractic",
            images: [EgyptChiropractic],
          },
          {
            id: 2,
            name: "Susana\nAyurveda",
            techStack: ["Wix"],
            viewLink: "https://www.susanaayurveda.com/",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            github: "https://www.susanaayurveda.com/",
            images: [SusanaAyurveda],
          },
          {
            name: "Wholesale\nPortal",
            techStack: [
              "JavaScript",
              "Redux",
              "React",
              "Nodejs",
              "Expressjs",
              "HTTPS",
              "OAuth 2.0",
            ],
            viewLink: "http://jsandlerus.github.io/wholesale-portal",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            github: "https://github.com/jsandlerus/wholesale-portal",
            images: [SusanaAyurveda],
          },
        ],
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Brent Smith\nSenior Software Engineer",
    review:
      "“Working with Jonathan has been one of the best experience in my life. His professionalism and coding skills helped us move out from a very difficult problem the company was facing”",
  },
  {
    name: "Matthew \nSenior Software Engineer",
    review:
      '"Thank you for this profound, restorative and revitalizing experience. I felt so comfortable and careful. You guys are the best!."',
  },
  {
    name: "Wendy Sanchez",
    review:
      '"I had several opportunities to receive excellent service from the technicians of this website. I liked how professional they are. I give my highest recommendation."',
  },
];
