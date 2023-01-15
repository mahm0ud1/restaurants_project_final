import { useRef, useState } from "react";
import CounterButton from "../../tools/CounterButton/CounterButton";
import DishProps from "./DishProps";
import { ConfirmOrderButtonStyle, DishContainerStyle, DishDetailsStyle, DishImageStyle, DishOptionContainerStyle, DishOptionsContainerStyle, DishTitleContainerStyle, DishTitleStyle, OptionButtonStyle, OptionHeaderStyle, OptionLabelStyle, OptionValuesStyle } from './Style'

const optionsValues: Option[] = [
    {
        "name": "side",
        "title": "Choose a side",
        "type": "radio",
        "options": [
            "White bread",
            "Sticky rice"
        ]
    },
    {
        "name": "changes",
        "title": "Changes",
        "type": "checkbox",
        "options": [
            "Whithout peanuts1",
            "Sticky Less spicy1"
        ]
    },
    {
        "name": "changes1",
        "title": "Changes",
        "type": "checkbox",
        "options": [
            "Whithout peanuts2",
            "Sticky Less spicy2"
        ]
    }
]

interface Option {
    name: string,
    title: string,
    type: string,
    options: string[]
}

const Dish = ({ props }: { props: DishProps }) => {
    const selectedOptions = useRef<Map<String, Object>>(new Map());
    const [counter, setCounter] = useState(0);

    const handleSubmit = () => {
        try {
            const optionsParams = {
                dishID: props.id,
                options: Array.from(selectedOptions.current.entries()),
                count: counter
            }

            console.log(optionsParams);
        } catch (err) {
            console.log(err);
        }
    };

    const setValue = (name:string, value:string, type:string, selected:boolean) => {
        switch(type)
        {
            case "radio":
                selectedOptions.current.set(name, [value]);
                break;
            case "checkbox":
                if (!selectedOptions.current.has(name)) {
                    selectedOptions.current.set(name, new Set<string>())
                }
                const values = selectedOptions.current.get(name) as Set<string>;
                if(selected)
                    values.add(value);
                else
                    values.delete(value)
        }
    }

    const buildOptions = (options: Option) => {

        const optionsList = options.options.map((option: string) => {
            return (
                <OptionLabelStyle>
                    <OptionButtonStyle name={options.name} type={options.type} onChange={(e) => setValue(options.name, option, options.type, e.target.checked)} />
                    {option}
                </OptionLabelStyle>
            );
        })

        return (
            <DishOptionContainerStyle>
                <OptionHeaderStyle>{options.title}</OptionHeaderStyle>
                <OptionValuesStyle>
                    {optionsList}
                </OptionValuesStyle>
            </DishOptionContainerStyle>
        )
    }

    return (
        <>
            <DishContainerStyle>
                <DishImageStyle src={props.imageUrl} />
                <DishTitleContainerStyle>
                    <DishTitleStyle>{props.name}</DishTitleStyle>
                    <DishDetailsStyle>{props.about}</DishDetailsStyle>
                </DishTitleContainerStyle>
            </DishContainerStyle>
            <DishOptionsContainerStyle>
                {optionsValues.map(buildOptions)}
                <DishOptionContainerStyle>
                    <OptionHeaderStyle>Quantity</OptionHeaderStyle>
                    <OptionValuesStyle>
                        <CounterButton setCounter={setCounter} />
                    </OptionValuesStyle>
                </DishOptionContainerStyle>
                <ConfirmOrderButtonStyle onClick={handleSubmit}>Add to bag</ConfirmOrderButtonStyle>
            </DishOptionsContainerStyle>
        </>
    )
}

export default Dish;