import { SignaturesContainerStyle, SignaturesTitleStyle, SignaturesListContainerStyle, SignatureContainerStyle, SignatureImageStyle, SignatureTypeStyle } from './Style'
import GetSignatureImage from '../../../assets/signatures/Signatures';

const getSignatureStyle = (image:string,type:string) =>
{
    return (
        <SignatureContainerStyle>
            <SignatureImageStyle src={GetSignatureImage(image)} />
            <SignatureTypeStyle>{type}</SignatureTypeStyle>
        </SignatureContainerStyle>
    );
}

const Signature = () => {
    return (
        <>
            <SignaturesContainerStyle>
                <SignaturesTitleStyle>Signature Dish Of:</SignaturesTitleStyle>
                <SignaturesListContainerStyle>
                    {getSignatureStyle("spicy", "Spicy")}
                    {getSignatureStyle("vegitarian", "Vegitarian")}
                    {getSignatureStyle("vegan", "Vegan")}
                </SignaturesListContainerStyle>
            </SignaturesContainerStyle>
        </>
    );
}

export default Signature;