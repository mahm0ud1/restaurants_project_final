import DishProps from "./DishProps";
import { DishContainerStyle, DishDetailsStyle, DishImageStyle, DishOptionContainerStyle, DishOptionsContainerStyle, DishTitleContainerStyle, DishTitleStyle, OptionButtonStyle, OptionHeaderStyle, OptionLabelStyle, OptionValuesStyle } from './Style'

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

    const setRadioButton = (name:string, value:string) => {
        selectedOptions.set(name, value);
        console.log(name, value);
    }

    const setValueCheckbox = (name:string, value:string, value1:any) => {
        if(selectedOptions.has(name))
        {
            selectedOptions.set(name,new Set<string>())
        }
        (selectedOptions.get(name) as Set<string>).add(value);
        console.log(selectedOptions.get(name));
    }

    const buildOptions = (options: Option) => {

        const optionsList = options.options.map((option: string) => {
            return (
                <OptionLabelStyle>
                    <OptionButtonStyle name={options.name} type={options.type} onChange={(e)=>setValueCheckbox(options.name,option,e.target.checked)} />
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
            <DishOptionsContainerStyle  onSubmit={handleSubmit}>
                {optionsValues.map(buildOptions)}
                <OptionButtonStyle type="submit" />
            </DishOptionsContainerStyle>
        </>
    )
}

export default Dish;