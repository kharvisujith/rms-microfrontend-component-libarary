import React, { useState } from "react";
import "./FormTabs.style.scss";

export interface IAddJobTabs {
  tabsLabel: string[];
  formComponent: React.ReactNode;
  activeTab: number;
  onTabClick: (activeTab: number) => void;
}

const AddJobTabs = ({
  tabsLabel,
  formComponent,
  activeTab,
  onTabClick,
}: IAddJobTabs) => {
  return (
    <>
      <div className="common-form-tab-container">
        <div className="common-form-tab-container-tabs">
          {tabsLabel.map((label: string, index: number) => (
            <div
              key={index}
              className={`common-form-tab-container-tabs-tab ${
                index <= activeTab
                  ? "common-form-tab-container-tabs-active"
                  : ""
              }`}
              onClick={() => onTabClick(index)}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="common-form-tab-container-content-container">
          {/* {tabsLabel[activeTab].content} */}
          {formComponent}
        </div>
      </div>
    </>
  );
};
export default AddJobTabs;
