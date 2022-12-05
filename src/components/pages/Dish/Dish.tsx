import DishProps from "./DishProps";
import { DishContainerStyle, DishDetailsStyle, DishImageStyle, DishOptionContainerStyle, DishOptionsContainerStyle, DishTitleContainerStyle, DishTitleStyle, OptionButtonStyle, OptionHeaderStyle, OptionLabelStyle, OptionValuesStyle } from './Style'

const Dish = ({ props }: { props: DishProps }) => {
    return (
        <>
            <DishContainerStyle>
                <DishImageStyle src={props.imageUrl} />
                <DishTitleContainerStyle>
                    <DishTitleStyle>{props.title}</DishTitleStyle>
                    <DishDetailsStyle>{props.details}</DishDetailsStyle>
                </DishTitleContainerStyle>
            </DishContainerStyle>
            <DishOptionsContainerStyle>
                <DishOptionContainerStyle>
                    <OptionHeaderStyle>Choose a side</OptionHeaderStyle>
                    <OptionValuesStyle>
                        <OptionLabelStyle>
                            <OptionButtonStyle type="radio" name="side" />
                            White bread
                        </OptionLabelStyle>
                        <OptionLabelStyle>
                            <OptionButtonStyle type="radio" name="side" />
                            Sticky rice
                        </OptionLabelStyle>
                    </OptionValuesStyle>
                </DishOptionContainerStyle>
                <DishOptionContainerStyle>
                    <OptionHeaderStyle>Changes</OptionHeaderStyle>
                    <OptionValuesStyle>
                        <OptionLabelStyle>
                            <OptionButtonStyle type="checkbox" />
                            Whithout peanuts
                        </OptionLabelStyle>
                        <OptionLabelStyle>
                            <OptionButtonStyle type="checkbox" />
                            Sticky Less spicy
                        </OptionLabelStyle>
                    </OptionValuesStyle>
                </DishOptionContainerStyle>
                <DishOptionContainerStyle>
                    <OptionHeaderStyle>Changes</OptionHeaderStyle>
                    <OptionValuesStyle>
                        <OptionLabelStyle>
                            <OptionButtonStyle type="checkbox" />
                            Whithout peanuts
                        </OptionLabelStyle>
                        <OptionLabelStyle>
                            <OptionButtonStyle type="checkbox" />
                            Sticky Less spicy
                        </OptionLabelStyle>
                    </OptionValuesStyle>
                </DishOptionContainerStyle>
                
            </DishOptionsContainerStyle>
        </>
    )
}

export default Dish;