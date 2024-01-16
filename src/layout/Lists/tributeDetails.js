import  ruthImage from "../../assets/images/ruth-tribute.png"
import  bensonImage from "../../assets/images/benson-tribute.png"
import  ladyImage from "../../assets/images/lady-tribute.png"
import  babyImage from "../../assets/images/baby-tribute.png"

const tributeDetails = [
    {
        id: 1,
        fullName: "Ruth Thompson",
        tributeType: "Birthday",
        photoSRC: ruthImage,
        photoAlt: "Ruth Picture",
        publishedValue: true,
        draft: false
    },
    {
        id: 2,
        fullName: "Benson Thompson",
        tributeType: "Funeral",
        photoSRC: bensonImage,
        photoAlt: "Benson Picture",
        publishedValue: true,
        draft: false
    },
    {
        id: 3,
        fullName: "Kemi Robbert",
        tributeType: "Convocation",
        photoSRC: ladyImage,
        photoAlt: "Lady Picture",
        publishedValue: false,
        draft: false
    },
    {
        id: 4,
        fullName: "Kemi Robbert",
        tributeType: "Convocation",
        photoSRC: babyImage,
        photoAlt: "Baby Picture",
        publishedValue: true,
        draft: true
    }
]

export default tributeDetails