import  ruthImage from "../../assets/images/ruth-tribute.png"
import  bensonImage from "../../assets/images/benson-tribute.png"
import  ladyImage from "../../assets/images/lady-tribute.png"
import  babyImage from "../../assets/images/baby-tribute.png"


const tributeDetails = [
    {
        id: 1,
        fullName: "Ruth Thompson",
        tributeTitle: "Birthday Celebration",
        tributeType: "birthday",
        tributeBio: "Adventurous spirit with a passion for creativity and innovation. Tech enthusiast by day, nature lover by weekend. Always seeking new experiences and embracing challenges. Avid reader, aspiring chef, and lifelong learner. Living life one adventure at a time. An adventurous spirit with a passion for creativity and innovation. Tech enthusiast by day, nature lover by weekend. Always seeking new experiences and embracing challenges. Avid reader, aspiring chef, and lifelong learner. Living life one adventure at a time.",
        dateOfBirth: new Date(2023, 10, 5),
        dateOfDeath: null,
        relationship: "mother",
        musicLink: "Smile || Trendybeatz.com",
        publicType: "private",
        tributeKey: "BWT-BD-202403120002",
        photoSRC: ruthImage,
        photoAlt: "Ruth Picture",
        publishedValue: true,
        draft: false,
        otherImages: []
    },
    {
        id: 2,
        fullName: "Benson Thompson",
        tributeTitle: "Celebration of Life",
        tributeType: "funeral",
        tributeBio: "Adventurous spirit with a passion for creativity and innovation. Tech enthusiast by day, nature lover by weekend. Always seeking new experiences and embracing challenges. Avid reader, aspiring chef, and lifelong learner. Living life one adventure at a time. An adventurous spirit with a passion for creativity and innovation. Tech enthusiast by day, nature lover by weekend. Always seeking new experiences and embracing challenges. Avid reader, aspiring chef, and lifelong learner. Living life one adventure at a time.",
        dateOfBirth: new Date(1930, 4, 23),
        dateOfDeath: new Date(2023, 10, 5),
        relationship: "father",
        musicLink: "Smile || Trendybeatz.com",
        publicType: "public",
        tributeKey: "",
        photoSRC: bensonImage,
        photoAlt: "Benson Picture",
        publishedValue: true,
        draft: false
    },
    {
        id: 3,
        fullName: "Kemi Robbert",
        tributeTitle: "Anniversary Celebration",
        tributeType: "anniversary",
        tributeBio: "Adventurous spirit with a passion for creativity and innovation. Tech enthusiast by day, nature lover by weekend. Always seeking new experiences and embracing challenges. Avid reader, aspiring chef, and lifelong learner. Living life one adventure at a time. An adventurous spirit with a passion for creativity and innovation. Tech enthusiast by day, nature lover by weekend. Always seeking new experiences and embracing challenges. Avid reader, aspiring chef, and lifelong learner. Living life one adventure at a time.",
        dateOfBirth: new Date(2023, 10, 5),
        dateOfDeath: null,
        relationship: "cousin",
        musicLink: "Smile || Trendybeatz.com",
        publicType: "private",
        tributeKey: "BWT-AN-202404130442",
        photoSRC: ladyImage,
        photoAlt: "Lady Picture",
        publishedValue: false,
        draft: false
    },
    {
        id: 4,
        fullName: "Kemi Robbert",
        tributeType: "anniversary",
        tributeBio: "Adventurous spirit with a passion for creativity and innovation. Tech enthusiast by day, nature lover by weekend. Always seeking new experiences and embracing challenges. Avid reader, aspiring chef, and lifelong learner. Living life one adventure at a time. An adventurous spirit with a passion for creativity and innovation. Tech enthusiast by day, nature lover by weekend. Always seeking new experiences and embracing challenges. Avid reader, aspiring chef, and lifelong learner. Living life one adventure at a time.",
        dateOfBirth: new Date(2023, 10, 5),
        dateOfDeath: null,
        relationship: "mother",
        musicLink: "Smile || Trendybeatz.com",
        publicType: "public",
        tributeKey: "",
        tributeTitle: "Anniversary Celebration",
        photoSRC: babyImage,
        photoAlt: "Baby Picture",
        publishedValue: true,
        draft: true
    }
]

export default tributeDetails