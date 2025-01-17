import styled from "styled-components";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 1em;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: "#fff";
    margin: 8px;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 5px 3px 5px rgba(0, 0, 0, 0.3);
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid "#ccc";
    // box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
    display: none;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';
