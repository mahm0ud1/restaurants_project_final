import { useState } from "react";
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
        "name": "changes",
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
    const selectedOptions = new Map();
    const [counter, setCounter] = useState(0);

    let handleSubmit = async () => {
        try {
            let res = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({
                    name: "",
                    email: "",
                    mobileNumber: "",
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {

            } else {

            }
        } catch (err) {
            console.log(err);
        }
    };

    const setValue = (name:string, value:string, type:string, selected:boolean) => {
        switch(type)
        {
            case "radio":
                selectedOptions.set(name, [value]);
                break;
            case "checkbox":
                if (!selectedOptions.has(name)) {
                    selectedOptions.set(name, new Set<string>())
                }
                const values = selectedOptions.get(name) as Set<string>;
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
                    <DishTitleStyle>{props.title}</DishTitleStyle>
                    <DishDetailsStyle>{props.details}</DishDetailsStyle>
                </DishTitleContainerStyle>
            </DishContainerStyle>
            <DishOptionsContainerStyle onSubmit={handleSubmit}>
                {optionsValues.map(buildOptions)}
                <DishOptionContainerStyle>
                    <OptionHeaderStyle>Quantity</OptionHeaderStyle>
                    <OptionValuesStyle>
                        <CounterButton setCounter={setCounter} />
                    </OptionValuesStyle>
                </DishOptionContainerStyle>
                <ConfirmOrderButtonStyle>Test</ConfirmOrderButtonStyle>
            </DishOptionsContainerStyle>
        </>
    )
}

export default Dish;