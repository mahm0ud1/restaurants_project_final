import HandleCloseInterface from "../../../interfaces/HandleCloseInterface";
import { BagContainerStyle, BagOutSideContainerStyle } from "./Style";

const Bag = ({ closeFunction }:HandleCloseInterface) => {

    const CloseBag = () => {
        closeFunction();
    }

    return (
        <>
            <BagContainerStyle>
                <div>Bag</div>
            </BagContainerStyle>
            <BagOutSideContainerStyle onClick={CloseBag}/>
        </>
    )
}

export default Bag;