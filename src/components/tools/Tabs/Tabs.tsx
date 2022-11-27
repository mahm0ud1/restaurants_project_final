import { TabsStyle, TabStyle } from './Style'

interface TabsProps {
    selected: string|undefined;
    selectTab: (tab:string) => void
    children: React.ReactElement<typeof Tab>[];
}

interface TabProps {
    tabName: string,
    tabValue: string
}

const Tabs = (props: TabsProps) => {
    const selectedTab = props.selected !== undefined ? props.selected : (props.children[0] as unknown as TabProps).tabName;

    return (
        <TabsStyle>{props.children.map((tab: React.ReactElement<typeof Tab>) => {
            const tabProps = tab.props as unknown as TabProps;
            return <TabStyle
                onClick={() => props.selectTab(tabProps.tabValue)}
                className={tabProps.tabValue == selectedTab ? "selected" : ""}>
                {tab}
            </TabStyle>;
        })}</TabsStyle>
    )
}

const Tab = (props:TabProps) => {
    return (
        <>{props.tabName}</>
    )
}

export { Tabs, Tab };