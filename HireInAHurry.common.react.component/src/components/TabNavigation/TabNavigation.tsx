import React from "react";
import "./TabNavigation.style.scss";
import "../../common/common.style.scss";

export interface ITabNaviationProps {
  tabList: string[];
  currentTab: string;
  handleTabChange: (tabName: string) => void;
}

const TabNavigation = ({
  currentTab,
  handleTabChange,
  tabList,
}: ITabNaviationProps) => {
  return (
    <div className="common-tab-navigation">
      <ul className="common-tab-navigation-horizontal-tabs">
        {tabList.map((tabName: string, index: number) => (
          <li
            className={`common-tab-navigation-item ${
              currentTab === tabName ? "common-tab-navigation-active" : ""
            }`}
            key={index}
            onClick={() => handleTabChange(tabName)}
          >
            {tabName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabNavigation;
