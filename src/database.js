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
            description: "ECSITE is an innovative high-grow Cloud-based company disrupting the Construction and Wireless Telecom Infrastructure sectors leading into 5G and beyond. As Quality Assurance Engineer, I had the opportunity to design and build an Agnostic Automation Test Framework using technologies like AWS S3 services, React, Flask, Python, and JavaScript.\n\nEvery day this tool automates over 1000 test cases across Web browsers, Windows Xamarin Apps, and Android and iOS Applications, improving the performance and efficiency of multiple teams greatly. Made completely dynamic and scalable, its simple user interface allows to create and run a new test case in less than a minute.\n\nI have also been crucial in the design of new platforms as well as improving existing ones. Thanks to my background in programming, I was able to bring very technical requirements from the dev team into functional, easy-to-use UIs that even the general public can use.\n\nNevertheless, my primary focus has been the development of one of our major SAAS Apps in our Agile environment. This product currently has 3000 daily customer data entry points with an expected growth of over 10,000 a day. Finally, I’m currently working to expand productivity for one of our services by designing a feature that provides the same functionality 4 to 8 times faster.",
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
            description: "Simple Breakthrough is a software company that creates unique business solutions for industry-specific problems. Guided by their experienced founders, they help to tackle down very difficult tasks by merging blazing-fast platforms with great user experience designs.\n\nI had the great pleasure of being picked up by Jackson Felty, one of the co-founders of Simple Breakthrough, to join their lines as a Front-End Software Engineer. Working with technologies like React, JavaScript, Redux, NodeJS, and MongoDB, I am part of the development of the CBDDY international e-commerce platform.\n\nApart from developing the User Interface of the site, I was also involved in the development of the product management system, allowing authenticated users to create, edit, update, and delete products from the database.",
            github: "https://github.com/jsandlerus/wholesale-portal",
            images: [simple],
          },
          {
            name: "Armada",
            techStack: [
              javascript, nodejs, html5, css3, bootstrap, jquery, socketio, git
            ],
            viewLink: "http://armadaaero.com",
            description: "Armada Aeronautics is a 21st-century transportation company disrupting air travel with new modes of transportation. Armada develops a 0-carbon solution for modern aviation with innovations in software and hardware.\n\nAs a Front-End Engineer and Lead Developer, my work at Armada allows me to lead the development of their first internal flight system. By using technologies like JavaScript, jQuery, and Socketio I was able to develop the Flying Control User Interface for Pilots, the Developers Diagnostic View of Engines, and the crash-survivable Blackbox recovery system of the vehicle.\n\nI also had the opportunity to develop the first version of the Manual Hardware Control of the Vehicle, like the stirring wheel and gearbox. I was honored to present the advances of our technology at a private investors event of the company, helping to achieve one of the several seed rounds.",
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
              "My Ayurveda Clinic (currently in progress) is an e-commerce platform for Ayurvedic Medical Professionals, that features a booking system, and a live video chat between patients and doctors. It is powered by a smart search engine that filters results based on multiple databases like illnesses, medical products, and clinicians.\n\nIt also allows to filter results based on multiple categories simultaneously based on price, availability, languages spoken, and dates. Patient reviews are displayed using infinite scrolling at the bottom of the page. Medical Professionals are featured with location, price, a rating system based on customer reviews, and the last highest rating they received from their patients. Technologies used: React + Redux (Front-end), NodeJS + ExpressJS (Back-end), MongoDB (Database), and JavaScript.\n\nThis project is meant to accelerate the growth and implementation of natural medicine in society. I am making it from my endless gratitude towards natural medicine and for how much it has helped me in my life and my health.",
            github: "https://github.com/jsandlerus/myayurvedaclinic",
            team: 1,
            images: [myayurvedaclinicMenu,myayurvedaclinicSearch, myayurvedaclinicProfessionals, myayurvedaclinicResults,myayurvedaclinicReviews],
          },
          {
            name: "Gifme",
            techStack: [redux, react, javascript, css3, mongodb, git],
            viewLink: "https://reaction-gifme.herokuapp.com/",
            description: "A fun and personalized gif-making and sharing platform for day-to-day sharing of gifs on social media platforms. Users can take photos and/or gifs, apply filters and stickers over them, and post them publicly across multiple social media channels.\n\nPhotos and gifs can be rated, commented on, and sorted. Gifme is enriched by the powerful Giffy API, allowing users access to thousands of gifs completely free of use. The platform also features a personalized, token-secured management system of gifs. Users can add or remove their favorite gifs all from one single page.\n\nGifme platform also provides a user preferences system to manage email and account details, and a gif preview tool for unauthenticated users to use gifme features before creating an account. Technologies used: React (Front-end), NodeJS + ExpressJS (Back-end), MongoDB (database), all powered with JavaScript.",
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
            name: "CBDDY\nE-commerce",
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
              "CBDDY E-commerce is an international wholesale platform for selling top-shelf, lab-tested hemp products. It provides a very clean and simple user-friendly experience for customers, featuring category filtering, and a review rating system for products. Customers can “like” products and have them displayed as part of their personalized Home Page.\n\nCBDDY also provides a product management system for administrators only. Users can create, edit, update, and soft or hard delete products from the products database system. The E-commerce platform also provides a product featuring page with carousel images, a product star review system, description, and add-to shopping cart action buttons. Lastly, the platform enjoys a secure checkout system using GoCardless API and an account management system for payment methods and email preferences.\n\nThe technologies used for this project were React + Redux (Front-end), NodeJS + ExpressJS (Back-end), OAuth2.0, HTTPS, and GoCardless API (security), MongoDB (Database), and JavaScript as language.",
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
