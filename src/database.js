import JonathanImage from "./resources/Background/face1.png";
import slicedFace from "./resources/Background/sliced face.png";

import gifmeFavorites from "./resources/Projects/gifme-favorites.png";
import gifmeHome from "./resources/Projects/gifme-home.png";
import gifmeLogin from "./resources/Projects/gifme-login.png";
import gifmePictures from "./resources/Projects/gifme-picture.png";
import gifmeSettings from "./resources/Projects/gifme-settings.png";
import portfolioAbout from "./resources/Projects/portfolio-about.png";
import portfolioContact from "./resources/Projects/portfolio-contact.png";
import portfolioDisplay from "./resources/Projects/portfolio-display.png";
import portfolioHome from "./resources/Projects/portfolio-home.png";
import myayurvedaclinicMenu from "./resources/Projects/myayurvedaclinic-menu.png";
import myayurvedaclinicProfessionals from "./resources/Projects/myayurvedaclinic-professionals.png";
import myayurvedaclinicResults from "./resources/Projects/myayurvedaclinic-results.png";
import myayurvedaclinicReviews from "./resources/Projects/myayurvedaclinic-reviews.png";
import myayurvedaclinicSearch from "./resources/Projects/myayurvedaclinic-search.png";
import wholesaleAccount from "./resources/Projects/wholesale-account.png";
import wholesaleLogin from "./resources/Projects/wholesale-login.png";

import armada from "./resources/Logos/armada-logo.png";
import ECSITE from "./resources/Logos/ECSite-logo.png";
import simple from "./resources/Logos/simplebreakthrough-logo.png";

import postman from "./resources/Logos/postman-logo.png";
import react from "./resources/Logos/react-logo.png";
import redux from "./resources/Logos/redux-logo.png";
import javascript from "./resources/Logos/javascript-logo.png";
import socketio from "./resources/Logos/socketio-logo.png";
import github from "./resources/Logos/github-logo.png";
import git from "./resources/Logos/git-logo.png";
import css3 from "./resources/Logos/css3-logo.png";
import html5 from "./resources/Logos/html5-logo.png";
import nodejs from "./resources/Logos/nodejs-logo.png";
import mongodb from "./resources/Logos/mongodb-logo.png";
import jquery from "./resources/Logos/jquery-logo.png";
import python from "./resources/Logos/python-logo.png";
import flask from "./resources/Logos/flask-logo.png";
import nextjs from "./resources/Logos/nextjs-logo.png";
import expressjs from "./resources/Logos/expressjs-logo.png";
import mui from "./resources/Logos/mui-logo.png";
import bootstrap from "./resources/Logos/bootstrap-logo.png";
import amazons3 from "./resources/Logos/amazons3-logo.png";
import zephyrsquad from "./resources/Logos/zephyrsquad-logo.png";
import oauth2 from "./resources/Logos/oauth2.0-logo.png";
import json from "./resources/Logos/json-logo.png";
import c from "./resources/Logos/c-logo.png";
import selenium from "./resources/Logos/selenium-logo.png";
import appium from "./resources/Logos/appium-logo.png";
import java from "./resources/Logos/java-logo.png";
import jira from "./resources/Logos/jira-logo.png";
import { Javascript } from "@mui/icons-material";

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
              javascript, css3, react, redux, python, flask, selenium, appium, jira, zephyrsquad, amazons3, json
            ],
            viewLink: "https://ecsiteapp.com/",
            description: "ECSITE is an innovative high-grow Cloud-based company disrupting the Construction and Wireless Telecom Infrastructure leading into 5G and beyond. As Quality Assurance Engineer, I had the opportunity to design and build an Agnostic Automation Test Framework to automate over 1000 test cases across 5 platforms working with technologies like AWS S3 services, React, Flask, Python, and JavaScript.\n\nI provide technical support to the engineering team in an Agile Environment and I’m currently improving the productivity of one of the services by designing a 4-8x feature. I weekly participate in App release processes with 10,000 daily customer data entry points.",
            images: [ECSITE],
          },
          {
            name: "Simple\nBreakthrough",
            techStack: [
              javascript,
              redux,
              react,
              nodejs,
              expressjs,
              oauth2,
              git
            ],
            viewLink: "http://jsandlerus.github.io/wholesale-portal",
            description: "Simple Breakthrough software company creates unique business solutions for industry-specific problems. I had the great pleasure of being picked up by Jackson Felty, one of the co-founders of Simple Breakthrough, to join their lines as a Front-End Software Engineer.\n\nWorking with technologies like React, JavaScript, Redux, NodeJS, and MongoDB, I lead the development of the User Experience for a Wholesale platform with a product management system.",
            github: "https://github.com/jsandlerus/wholesale-portal",
            images: [simple],
          },
          {
            name: "Armada",
            techStack: [
              javascript, nodejs, html5, css3, bootstrap, jquery, socketio, git
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
        techStack: [{name:"Languages", tech:[ javascript, html5, css3, c, python, java]},
        {name:"Frameworks & Libraries", tech:[redux, react, expressjs, jquery, socketio, flask,nodejs, mui, bootstrap]},
        {name:"Databases/Industry Tools", tech:[git, github, mongodb, amazons3, json]},
        {name:"Tools/Software", tech:[postman, jira, zephyrsquad, selenium, appium]}
        ],
        github: "https://github.com/jsandlerus",
      },
      {
        name: "Projects",
        items: [
          {
            name: "My Ayurveda\nclinic",
            techStack: [
              javascript,
              redux,
              react,
              nodejs,
              expressjs,
              mongodb,
              git
            ],
            viewLink: "http://jsandlerus.github.io/myayurvedaclinic",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            github: "https://github.com/jsandlerus/myayurvedaclinic",
            team: 1,
            images: [myayurvedaclinicMenu,myayurvedaclinicSearch, myayurvedaclinicProfessionals, myayurvedaclinicResults,myayurvedaclinicReviews],
          },
          {
            name: "Gifme",
            techStack: [redux, react, javascript, css3, mongodb, git],
            viewLink: "https://reaction-gifme.herokuapp.com/",
            description: "A personalized gif making and sharing platform using the Giffy API. Users can take photos and/or gifs, apply filters and stickers over them, and post them publicly. Photos and gifs can be rated, commented on, and sorted. Additionally, they can be exported to different social media platforms.\n\nFeatures: Management system of gifs, user preferences system, gif preview for unauthenticated users. Technologies used: React + JavaScript (front-end), NodeJS + Express (back-end), and MongoDB (database).",
            github: "https://github.com/jsandlerus/gifme",
            images: [gifmeHome,gifmeFavorites, gifmeLogin, gifmePictures, gifmeSettings],
          },
          {
            id: 2,
            name: "JS Designs",
            techStack: [react, redux, javascript, css3, nextjs, git],
            viewLink: "https://www.jsdesigns.us/",
            description: "JS Designs is a tool I created to show cast my personal portfolio while creating an extraordinary immersive user experience. It combines cutting edge technologies like React, Redux, ECMA2018 JavaScript, and Nextjs to enhance its user interface at a super low rendering cost.\n\nThe website transports the user to a live black forest, it provides a day and night experience, moving water, fog, and beautiful fireflies. All enhanced with nature sound and background music.\n\nIt is 100% mobile-first, fully responsive, cross-browser consistent. It can render blazing fast on any smartphone browser, achieving a high and smooth frame rate (60 frames per second). Tested on Android and iOS devices.\n\n Features: Counts with a carousel gallery for each project (that can be used on the same manner for products), a really cool navigation system, contact form and email system, and breadcrumbs for a flawless user interaction. It also provides a text-to-speech for all texts displayed as a disability feature",
            github: "https://github.com/jsandlerus/portfolio",
            images: [portfolioHome, portfolioAbout, portfolioContact, portfolioDisplay],
          },
          {
            name: "Wholesale\nPortal",
            techStack: [
              javascript,
              redux,
              react,
              nodejs,
              expressjs,
              oauth2,
              git
            ],
            viewLink: "http://jsandlerus.github.io/wholesale-portal",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            github: "https://github.com/jsandlerus/wholesale-portal",
            images: [wholesaleLogin, wholesaleAccount],
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
