import HandleCloseInterface from "../../../interfaces/HandleCloseInterface";
import { BagContainerStyle, BagEmptyContainerStyle, BagOutSideContainerStyle } from "./Style";
import { InnerBag } from '../../../assets/AllLogo'

const Bag = ({ closeFunction }:HandleCloseInterface) => {

    const CloseBag = () => {
        closeFunction();
    }

    return (
        <>
            <BagContainerStyle>
                <BagEmptyContainerStyle>
                    <img src={InnerBag} />
                </BagEmptyContainerStyle>
            </BagContainerStyle>
            <BagOutSideContainerStyle onClick={CloseBag}/>
        </>
    )
}

export default Bag;