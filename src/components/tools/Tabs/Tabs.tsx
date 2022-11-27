import Tab from "./Tab";
import TabsProps from "./TabsProps";
import { TabsStyle, TabStyle } from './Style'
import TabProps from "./TabProps";
import { useState } from "react";

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

export default Tabs;