import React, { useState } from "react";
import "./Sidebar.style.scss";
import { Icon } from "@mui/material";

interface sidebarItems {
  icon: JSX.Element;
  label: string;
}

export interface SidebarProp {
  sidebarItems: sidebarItems[];
  handleOnClick: (label: string) => void;
}

const Sidebar: React.FC<SidebarProp> = ({
  sidebarItems,
  handleOnClick,
}: SidebarProp) => {
  const [activeContent, setActiveContent] = useState("HOME");
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const activeClass = (label: string) =>
    activeContent === label ? "active" : "";

  const handleActiveLabel = (label: string) => {
    setActiveContent(label);
    handleOnClick(label);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className={`common-sidebar`}>
      <div
        className={`common-sidebar-container ${
          sidebarExpanded
            ? "common-sidebar-container-expanded"
            : "common-sidebar-container-collapsed"
        }`}
      >
        <div
          className={`common-sidebar-container-toggle ${
            sidebarExpanded ? "common-sidebar-container-toggle-expanded" : ""
          }`}
          onClick={toggleSidebar}
        >
          <div
            className={`common-sidebar-container-toggle-hamburger-menu ${
              sidebarExpanded ? "common-sidebar-container-toggle-open" : ""
            }`}
            onClick={toggleSidebar}
          >
            <div className="common-sidebar-container-toggle-hamburger-menu-line"></div>
            <div className="common-sidebar-container-toggle-hamburger-menu-line"></div>
            <div className="common-sidebar-container-toggle-hamburger-menu-line"></div>
          </div>
        </div>
        {!sidebarExpanded ? (
          <div className={`common-sidebar-container-icon`}>
            <div className={`common-sidebar-container-icon-top`}>
              {sidebarItems
                .slice(0, 4)
                .map(({ icon, label }, index: number) => (
                  <div
                    key={index}
                    className={`common-sidebar-icon ${activeClass(label)}`}
                    onClick={() => handleActiveLabel(label)}
                  >
                    <Icon
                      sx={{
                        width: "2rem",
                        height: "2rem",
                      }}
                    >
                      {icon}
                    </Icon>
                  </div>
                ))}
            </div>
            <div className="common-sidebar-container-icon-bottom">
              {sidebarItems.slice(4).map(({ icon, label }, index: number) => (
                <div
                  key={index}
                  className={`common-sidebar-icon ${activeClass(label)}`}
                  onClick={() => handleActiveLabel(label)}
                >
                  <Icon
                    sx={{
                      width: "2rem",
                      height: "2rem",
                    }}
                  >
                    {icon}
                  </Icon>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`common-sidebar-container-icon expanded`}>
            <div className={`common-sidebar-container-icon-top`}>
              {sidebarItems
                .slice(0, 4)
                .map(({ icon, label }, index: number) => (
                  <div
                    key={index}
                    className={`common-sidebar-container-icon-top-wrap ${activeClass(
                      label
                    )}`}
                    onClick={() => handleActiveLabel(label)}
                  >
                    <div
                      key={label}
                      className="common-sidebar-container-icon-top-wrap-inner"
                    >
                      <Icon
                        sx={{
                          width: "2rem",
                          height: "2rem",
                          marginRight: "1rem",
                        }}
                      >
                        {icon}
                      </Icon>
                    </div>
                    <div className="common-sidebar-container-icon-top-wrap-inner-label">
                      {label}
                    </div>
                  </div>
                ))}
            </div>
            <div className="common-sidebar-container-icon-bottom expanded">
              {sidebarItems.slice(4).map(({ icon, label }, index: number) => (
                <div
                  key={index}
                  className={`common-sidebar-container-icon-bottom-wrap ${activeClass(
                    label
                  )}`}
                  onClick={() => handleActiveLabel(label)}
                >
                  <div
                    key={label}
                    className={`common-sidebar-container-icon-bottom-wrap-inner`}
                  >
                    <Icon
                      sx={{
                        width: "2rem",
                        height: "2rem",
                        marginRight: "1rem",
                      }}
                    >
                      {icon}
                    </Icon>
                  </div>
                  <div className="common-sidebar-container-icon-top-wrap-inner-label">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
