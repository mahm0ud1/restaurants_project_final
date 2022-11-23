import Spicy from './spicy.svg'
import Vegitarian from './vegitarian.svg'
import Vegan from './vegan.svg'

const GetSignatureImage = (image:string) => {

    switch(image)
    {
        case "spicy": return Spicy
        case "vegitarian": return Vegitarian
        case "vegan": return Vegan
    }
    return "";
}

export default GetSignatureImage;