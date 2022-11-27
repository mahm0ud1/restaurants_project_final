import Tab from "./Tab";

interface TabsProps {
    selected: string|undefined;
    selectTab: (tab:string) => void
    children: React.ReactElement<typeof Tab>[];
}

export default TabsProps;