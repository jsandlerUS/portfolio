import MyAyurvedaClinic from './resources/MyAyurvedaClinic.png'
import EgyptChiropractic from './resources/EgyptChiropractic.png'
import SusanaAyurveda from './resources/SusanaAyurveda.png'

import AldoImage from './resources/AldoOva.png'
import WendyImage from './resources/WendySanchez.png'

/* 

Home -> [About, Projects, Professional Experience, Contact]
Projects -> [a,b,c,d] -> Action
Professional Experience -> [x,y,z] -> action
About -> Action
Contact -> Action

*/
export const dataFlow = [
    {
        name: "Professional\nExperience",
        items: [
            {
            name: 'ECSITE',
            techStack: ['JavaScript', 'Redux', 'React', 'Nodejs', 'Expressjs', 'HTTPS', 'OAuth 2.0'],
            viewLink: 'http://jsandlerus.github.io/wholesale-portal',
            description: 'Automation Framework',
            github:'https://github.com/jsandlerus/wholesale-portal',
            team: 5,
            image: SusanaAyurveda,
        },
        {
            name: 'Your\nCompany',
            techStack: ['JavaScript', 'Redux', 'React', 'Nodejs', 'Expressjs', 'HTTPS', 'OAuth 2.0'],
            viewLink: 'http://jsandlerus.github.io/wholesale-portal',
            description: 'Front End Team Lead',
            github:'https://github.com/jsandlerus/wholesale-portal',
            team: 5,
            image: SusanaAyurveda,
        },
        {
            name: 'Armada',
            techStack: ['JavaScript', 'Redux', 'React', 'Nodejs', 'Expressjs', 'HTTPS', 'OAuth 2.0'],
            viewLink: 'http://jsandlerus.github.io/wholesale-portal',
            description: 'Front End Team Lead',
            github:'https://github.com/jsandlerus/wholesale-portal',
            team: 5,
            image: SusanaAyurveda,
        },

    ]
    },
    {
        name: 'Contact',
    },
    {
        name: 'About',
    },
    {
        name: 'Projects',
        items: [
            {
                name: "My Ayurveda\nClinic",
                techStack: ['JavaScript', 'Redux', 'React', 'Nodejs', 'Expressjs', 'HTTPS', 'OAuth 2.0'],
                viewLink: 'http://jsandlerus.github.io/myayurvedaclinic',
                description: 'Online booking system, live video chat, e-commerce, and an advanced search engine for products, illnesses, and professionals. Uses HIPPA complain APIs for tracking of Medical Records and video chat service.',
                github:'https://github.com/jsandleraol/MyAyurvedaClinic.com',
                team: 1,
                image: MyAyurvedaClinic,
            },
            {
                name: 'Egipt\nChiropractic',
                techStack: ['Wix'],
                viewLink: 'https://viperayurveda.wixsite.com/egyptchiropractic',
                description: '',
                github:'https://viperayurveda.wixsite.com/egyptchiropractic',
                team: 5,
                image: EgyptChiropractic,
            },
            {
                id: 2,
                name: 'Susana\nAyurveda',
                techStack: ['Wix'],
                viewLink: 'https://www.susanaayurveda.com/',
                description: '',
                github:'https://www.susanaayurveda.com/',
                team: 1,
                image: SusanaAyurveda,
            },
            {
                name: 'Wholesale\nPortal',
                techStack: ['JavaScript', 'Redux', 'React', 'Nodejs', 'Expressjs', 'HTTPS', 'OAuth 2.0'],
                viewLink: 'http://jsandlerus.github.io/wholesale-portal',
                description: 'Developed an e-commerce platform with an administrative area for stock sales and product management. Integrations: Google Sign-in, goCardless API for payments.',
                github:'https://github.com/jsandlerus/wholesale-portal',
                team: 5,
                image: SusanaAyurveda,
            },
            {
                name: 'Test',
                techStack: ['JavaScript', 'Redux', 'React', 'Nodejs', 'Expressjs', 'HTTPS', 'OAuth 2.0'],
                viewLink: 'http://jsandlerus.github.io/wholesale-portal',
                description: 'Developed an e-commerce platform with an administrative area for stock sales and product management. Integrations: Google Sign-in, goCardless API for payments.',
                github:'https://github.com/jsandlerus/wholesale-portal',
                team: 5,
                image: SusanaAyurveda,
            },
        ]
    },
    
];



export const testimonials = [
    {
        id: 0,
        name: 'Aldo Ova',
        country: 'Mexico',
        review: '"Thank you for this profound, restorative and revitalizing experience. I felt so comfortable and careful. You guys are the best!."',
        image: AldoImage,
    },
    {
        id: 1,
        name: 'Wendy Sanchez',
        country: 'USA',
        review: '"I had several opportunities to receive excellent service from the technicians of this website. I liked how professional they are. I give my highest recommendation."',
        image: WendyImage,
    },
    {
        id: 2,
        name: 'Aldo Ova',
        country: 'Mexico',
        review: '"Thank you for this profound, restorative and revitalizing experience. I felt so comfortable and careful. You guys are the best!."',
        image: AldoImage,
    },
    {
        id: 3,
        name: 'Wendy Sanchez',
        country: 'USA',
        review: '"I had several opportunities to receive excellent service from the technicians of this website. I liked how professional they are. I give my highest recommendation."',
        image: WendyImage,
    }
];