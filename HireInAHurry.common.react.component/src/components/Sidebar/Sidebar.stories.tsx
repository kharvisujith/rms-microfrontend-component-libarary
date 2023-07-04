import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Sidebar from "./Sidebar";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import WorkIcon from "@mui/icons-material/Work";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HomeIcon from "@mui/icons-material/Home";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  sidebarItems: [
    { icon: <HomeIcon fontSize="large" />, label: "HOME" },
    { icon: <SupervisorAccountIcon fontSize="large" />, label: "CANDIDATES" },
    { icon: <CorporateFareIcon fontSize="large" />, label: "ORGANIZATION" },
    { icon: <WorkIcon fontSize="large" />, label: "JOBS" },
    { icon: <SettingsRoundedIcon fontSize="large" />, label: "SETTINGS" },
    { icon: <LogoutRoundedIcon fontSize="large" />, label: "LOGOUT" },
  ],
  handleOnClick: (label) => {
    console.log("label", label);
  },
};
