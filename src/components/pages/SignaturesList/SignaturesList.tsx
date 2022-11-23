import { SignaturesContainerStyle, SignaturesTitleStyle, SignaturesListContainerStyle, SignatureContainerStyle, SignatureImageStyle, SignatureTypeStyle } from './Style'

const getSignatureStyle = (image:string,type:string) =>
{
    return (
        <SignatureContainerStyle>
            <SignatureImageStyle src={image} />
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
                    {getSignatureStyle("Image1", "Type1")}
                    {getSignatureStyle("Image2", "Type2")}
                    {getSignatureStyle("Image3", "Type3")}
                </SignaturesListContainerStyle>
            </SignaturesContainerStyle>
        </>
    );
}

export default Signature;